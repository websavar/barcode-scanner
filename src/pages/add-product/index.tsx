import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Context from 'context';
import { addProduct } from 'services/api';
import { FormValues } from 'types';
import { getNormalizedCode } from 'utils';
import { productDefaultValues } from '../../constants';
import Layout from 'components/layout';
import Button from 'components/controls/Button';
import Toggle from 'components/controls/Toggle';
import Input from 'components/controls/Input';
import Modal from 'components/Modal';
import BarcodeScanner from 'components/BarcodeScanner';
import Loader from 'components/Loader/loader';

const AddProduct: React.FC<{}> = ({ }) => {
  const [barcodeInput, setBarcodeInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleScan = (gtin: string) => {
    setIsOpen(false);
    setBarcodeInput(getNormalizedCode(gtin));
  };

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState,
    reset
  } = useForm<FormValues>({ defaultValues: productDefaultValues });

  const onSubmit = async (data: FormValues) => {
    if (!data || !barcodeInput) return;
    if (!data.code) data.code = parseInt(barcodeInput);

    setLoading(true);
    addProduct(data).then(() => {
      try {
        toast.success('Product added successfully!', {
          duration: 4000,
          position: 'top-right',
          style: {
            border: '1px solid #e6e6e6',
            padding: '5px 10px',
            color: 'gray',
            fontSize: '13px'
          },
        });
        reset(productDefaultValues);
        setBarcodeInput('');
      }
      catch (error) {
        console.log('error ', error);
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
      }
      finally {
        setLoading(false);
      }
    });
  };

  return (
    <Layout>
      <Context.Provider value={{ isOpen, openModal, closeModal }}>
        {loading && <Loader />}
        <div className='container sm:w-full lg:w-[1024px] xl:w-[1080px] mx-auto items-center p-4 my-1'>
          <Modal title='Barcode Scanner'>
            <BarcodeScanner onDetected={handleScan} />
          </Modal>
          <Toaster />
          <h1 className='mb-3 text-lg font-semibold text-gray-700'>Add new product</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='container mx-auto'
          >
            <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
              <div className="flex items-end">
                <label className="first-letter:capitalize w-full">
                  Code *
                  <input
                    className='inputField w-full'
                    placeholder='Barcode number'
                    value={barcodeInput}
                    onChange={(event) => {
                      setBarcodeInput(event.target.value);
                      setValue('code', parseInt(event.target.value));
                    }}
                  /></label>
                <button
                  onClick={openModal}>
                  <Image
                    src='/barcode.svg'
                    alt="Barcode Scanner"
                    title='Barcode Scanner'
                    width={45}
                    height={45}
                  /></button>
              </div>
              <Input name='id' register={register} />
              <Input name='amount_multiplier' register={register} />
              <Input name='brand' register={register} />
              <Input name='categ_id' register={register} />
              <Input name='category_id' register={register} />
              <Input name='description' register={register} />
              <Controller
                control={control}
                name="edeka_article_number"
                render={({ field: { ref, ...field } }) => <Toggle {...field} />}
              />
              <Input name='gross_weight' register={register} />
              <Input name='net_weight' register={register} />
              <Controller
                control={control}
                name="notes"
                render={({ field: { ref, ...field } }) => <Toggle {...field} />}
              />
              <Input name='packaging' register={register} />
              <Input name='related_products' register={register} required={false} />

              <Controller
                control={control}
                name="requires_best_before_date"
                render={({ field: { ref, ...field } }) => <Toggle {...field} />}
              />

              {watch('requires_best_before_date') &&
                <Input
                  name='best_before_date'
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
                register={register}
              />
              <Input
                name='trade_item_unit_descriptor_name'
                register={register}
              />
              <Input name='type' register={register} />
              <Input name='unit_name' register={register} />
              <Input name='validation_status' register={register} />
            </div>
            <div className='flex flex-col items-end'>
              <Button type='submit' classes='w-full sm:w-1/2 lg:w-1/3 mt-4 py-2'
                disabled={!formState.isValid}
              >Submit</Button>
              {(formState.isDirty && !formState.isValid) &&
                <p className='text-sm text-rose-800'>please fill out all mandatory fields with valid value</p>
              }
            </div>
          </form>
        </div>
      </Context.Provider>
    </Layout>
  )
}

export default AddProduct;