import { useState, useContext } from 'react';
import Context from 'context';
import Image from 'next/image';
import Button from 'components/controls/Button';

const ScanBarcode: React.FC<{
  handleScan: (barcode: string) => void,
}> = ({
  handleScan,
}) => {
    const [barcodeInput, setBarcodeInput] = useState<string>('');

    const { openModal } = useContext(Context)

    const searchClickHandle = () => {
      if (barcodeInput)
        handleScan(barcodeInput);
      setBarcodeInput('');
    }

    return (
      <div className="bg-gray-100">
        <div className="container sm:w-full lg:w-[1024px] xl:w-[1080px] mx-auto flex-col items-center p-3">
          <p className='text-xs'>Please use the barcode scanner or enter the product barcode manually</p>
          <div className="flex items-center mt-1">
            <input
              className='inputField'
              placeholder='Barcode number'
              value={barcodeInput}
              onChange={(event) => setBarcodeInput(event.target.value)}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                event.key === 'Enter' && searchClickHandle()
              }
            />
            <button
              className="mx-2"
              onClick={openModal}>
              <Image
                src='/barcode.svg'
                alt="Barcode Scanner"
                title='Barcode Scanner'
                width={40}
                height={35}
              /></button>
            <Button
              onClick={searchClickHandle}
              outlined
              disabled={!barcodeInput || barcodeInput.length < 3}>
              <Image
                src='/search.svg'
                alt="Find Product"
                title='Find Product'
                width={20}
                height={20}
              />
            </Button>
          </div>
        </div>
      </div>
    )
  }

export default ScanBarcode;
