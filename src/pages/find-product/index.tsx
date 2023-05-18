import { useState } from 'react';
import Context from '../../context';
import toast, { Toaster } from 'react-hot-toast';
import BarcodeScanner from 'components/BarcodeScanner';
import { getProductByCode } from 'services/api';
import Modal from 'components/Modal';
import ScanBarcode from 'components/ScanBarcode';
import ProductData from 'components/ProductData';
import { FormValues } from 'types'
import { getNormalizedCode } from 'utils';
import Loader from 'components/Loader/loader';

const ScanProduct = () => {
  const [product, setProduct] = useState<FormValues>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleScan = (gtin: string) => {
    setIsOpen(false);
    const code = getNormalizedCode(gtin);

    setLoading(true);
    getProductByCode(code).then((product) => {
      if (!product) {
        toast.error('No products found!', {
          duration: 4000,
          position: 'top-right',
          style: {
            border: '1px solid #e6e6e6',
            padding: '5px 10px',
            color: 'gray',
            fontSize: '13px'
          },
        });
        setLoading(false);
        return;
      }

      try {
        if (product?.trade_item_descriptor) {
          product['trade_item_unit_descriptor'] = product['trade_item_descriptor'];
          delete product['trade_item_descriptor']
        }
        setProduct(product);
      } catch (error) {
        console.log(error);
        toast.error('something went wrong!', {
          duration: 4000,
          position: 'top-right',
          style: {
            border: '1px solid #e6e6e6',
            padding: '5px 10px',
            color: 'gray',
            fontSize: '13px'
          },
        });
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <Context.Provider value={{ isOpen, openModal, closeModal }}>
      <Toaster />
      <Modal title='Barcode Scanner'>
        <BarcodeScanner onDetected={handleScan} />
      </Modal>

      <ScanBarcode handleScan={handleScan} />

      {loading && <Loader />}
      <ProductData productData={product} />
    </Context.Provider>
  )
}

export default ScanProduct;
