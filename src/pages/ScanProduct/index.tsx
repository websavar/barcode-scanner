import { useState } from 'react';
import Context from '@/context';
import BarcodeScanner from '@/components/BarcodeScanner';
import { getProductByCode } from '@/services/api';
import Modal from '@/components/Modal';
import ScanBarcode from '@/components/ScanBarcode';
import ProductData from '@/components/ProductData';
import { FormValues } from '@/types'
import { getNormalizedCode } from '@/utils';

const ScanProduct = () => {
  const [product, setProduct] = useState<FormValues>();
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  const handleScan = (gtin: string) => {
    console.log('gtin ', gtin);

    setIsOpen(false);
    const code = getNormalizedCode(gtin);

    getProductByCode(code).then((product) => {
      console.log('product ', product);
      if (!product) return;

      if (product?.trade_item_descriptor) {
        product['trade_item_unit_descriptor'] = product['trade_item_descriptor'];
        delete product['trade_item_descriptor']
      }

      setProduct(product);
    });
  };

  return (
    <Context.Provider value={{ isOpen, openModal, closeModal }}>
      <Modal title='Barcode Scanner'>
        <BarcodeScanner onDetected={handleScan} />
      </Modal>

      <ScanBarcode handleScan={handleScan} />

      <ProductData productData={product} />
    </Context.Provider>
  )
}

export default ScanProduct;
