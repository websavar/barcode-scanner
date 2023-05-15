import React, { useCallback, useEffect, useRef, useState, useContext } from 'react';
import Quagga from '@ericblade/quagga2';
import Context from '@/context';

type BarcodeScannerProps = {
  onDetected: (code: string) => void;
};

const BarcodeScanner = ({ onDetected }: BarcodeScannerProps) => {
  const [scanning, setScanning] = useState(true);

  const { isOpen } = useContext(Context);

  const scannerRef = useRef<HTMLDivElement>(null);

  const initScanner = useCallback(() => {
    void Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: '#scanner',
          constraints: {
            width: 640,
            height: 480,
          }
        },
        locator: {
          patchSize: 'large',
          halfSample: true,
        },
        decoder: {
          readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],
        },
        debug: false,
      },
      (error: any) => {
        if (error) {
          console.error('Error initializing Quagga:', error);
          return;
        }
        Quagga.start();
      }
    );
  }, []);

  const stopScanner = useCallback(() => {
    void Quagga.stop();
    if (scannerRef.current) {
      const videoElement = scannerRef.current.querySelector('video');
      if (videoElement) {
        scannerRef.current.removeChild(videoElement);
      }
      const canvasElement = scannerRef.current.querySelector('canvas');
      if (canvasElement) {
        scannerRef.current.removeChild(canvasElement);
      }
    }
  }, []);

  const onDetectedHandler = useCallback(
    (result: any) => {
      console.log('onDetectedHandler');
      if (result && result.codeResult) {
        setScanning(false);
        onDetected(result.codeResult.code);
      }
    },
    [onDetected]
  );

  useEffect(() => {
    if (!isOpen && scanning) {
      setScanning(false)
    }
  }, [isOpen, scanning])


  useEffect(() => {
    if (scanning) {
      initScanner();
      Quagga.onDetected(onDetectedHandler);
    } else {
      stopScanner();
      Quagga.offDetected(onDetectedHandler);
    }

    return () => {
      if (scanning) {
        stopScanner();
        Quagga.offDetected(onDetectedHandler);
      }
    };
  }, [initScanner, onDetectedHandler, scanning, stopScanner]);

  return (
    <>
      <div
        className='border border-gray-300'
        ref={scannerRef} id="scanner"
        style={{ marginTop: 16, width: '100%', height: 480 }}
      ></div>
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
        <button
          className='inline-flex items-center justify-center p-2 text-center text-sm text-gray-50 bg-gray-600 rounded hover:bg-gray-500'
          onClick={() => setScanning(!scanning)}>{scanning ? 'Stop Scanner' : 'Start Scanner'}
        </button>
      </div>
    </>
  );
};

export default BarcodeScanner;
