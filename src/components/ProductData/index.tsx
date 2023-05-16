import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { updateProduct } from '@/services/api';
import { FormValues } from '@/types'
import Button from '../controls/Button';
import Toggle from '../controls/Toggle';
import Input from '../controls/Input';

const productDefaultValues: FormValues = {
  id: '',
  amount_multiplier: null,
  brand: '',
  categ_id: null,
  category_id: null,
  code: null,
  description: '',
  edeka_article_number: false,
  gross_weight: null,
  net_weight: null,
  notes: false,
  packaging: '',
  related_products: [],
  requires_best_before_date: false,
  best_before_date: '',
  requires_meat_info: false,
  trade_item_unit_descriptor: '',
  trade_item_unit_descriptor_name: '',
  type: '',
  unit_name: '',
  validation_status: ''
};


const ProductData: React.FC<{ productData: any }> = ({ productData }) => {

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState,
    reset
  } = useForm<FormValues>({ defaultValues: productDefaultValues });
  console.log('productData-- ', productData, watch('code'));

  useEffect(() => {
    if (productData)
      reset(productData);
  }, [productData]);

  const onSubmit = (data: FormValues) => {
    if (!data || !formState.isDirty) return;

    console.log('submit ', data, formState.isValid);
    updateProduct(data).then(() => {
      reset(productDefaultValues);
    });
  };

  return (
    <div className='container mx-auto items-center input-field p-4 mt-1 mb-5'>
      <h1 className='mb-3 text-lg font-semibold text-gray-700'>Product Data</h1>
      {productData && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='container mx-auto'
        >
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <Input name='id' inputValue={productData.id} register={register} />
            <Input name='amount_multiplier' inputValue={productData.amount_multiplier} register={register} />
            <Input name='brand' inputValue={productData.brand} register={register} />
            <Input name='categ_id' inputValue={productData.categ_id} register={register} />
            <Input name='category_id' inputValue={productData.category_id} register={register} />
            <Input name='code' inputValue={productData.code} register={register} />
            <Input name='description' inputValue={productData.description} register={register} />
            <Controller
              control={control}
              name="edeka_article_number"
              render={({ field: { ref, ...field } }) => <Toggle {...field} />}
            />
            <Input name='gross_weight' inputValue={productData.gross_weight} register={register} />
            <Input name='net_weight' inputValue={productData.net_weight} register={register} />
            <Controller
              control={control}
              name="notes"
              render={({ field: { ref, ...field } }) => <Toggle {...field} />}
            />
            <Input name='packaging' inputValue={productData.packaging} register={register} />
            <Input name='related_products' inputValue={productData.related_products} register={register} required={false} />

            {productData.requires_best_before_date &&
              <Input
                name='best_before_date'
                inputValue={productData.best_before_date ?? ''}
                register={register}
                inputType='date' />
            }
            <Controller
              control={control}
              name="requires_meat_info"
              render={({ field: { ref, ...field } }) => <Toggle {...field} />}
            />
            <Input
              name='trade_item_unit_descriptor'
              inputValue={productData.trade_item_unit_descriptor ?? productData.trade_item_descriptor}
              register={register}
            />
            <Input
              name='trade_item_unit_descriptor_name'
              inputValue={productData.trade_item_unit_descriptor_name}
              register={register}
            />
            <Input name='type' inputValue={productData.type} register={register} />
            <Input name='unit_name' inputValue={productData.unit_name} register={register} />
            <Input name='validation_status' inputValue={productData.validation_status} register={register} />
          </div>
          <div className='flex flex-col items-end'>
            <Button type='submit' classes='w-full sm:w-1/2 lg:w-1/3 mt-4 py-2'
              disabled={!formState.isDirty}
            >Submit</Button>
            {(formState.isDirty && !formState.isValid) &&
              <p className='text-sm text-rose-800'>please fill out all mandatory fields with valid value</p>
            }
          </div>
        </form>
      )}
    </div>
  )
}

export default ProductData;