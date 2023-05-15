
const ProductData: React.FC<{ productData: any }> = ({ productData }) => {

  console.log('productData ', productData);


  return (
    <div className='container mx-auto items-center input-field p-4 mt-1 mb-5'>
      <h1 className='mb-3 text-lg font-semibold text-gray-700'>Product Data</h1>

    </div>
  )
}

export default ProductData;