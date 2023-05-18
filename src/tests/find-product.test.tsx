import { render, screen, fireEvent } from '@testing-library/react';
import { getProductByCode } from 'services/api';
import ScanProduct from '../pages/find-product';
import { getNormalizedCode } from 'utils';

jest.mock('services/api');

const getProductByCodeMock = getProductByCode as jest.Mock;
getProductByCodeMock.mockResolvedValue({
  id: '1',
  amount_multiplier: '1',
  brand: 'Brand name',
  code: '12345',
});

describe('ScanProduct', () => {
  test('calls getProductByCode and sets product', async () => {

    render(<ScanProduct />);

    const barcodeInput = screen.getByPlaceholderText('Barcode number') as HTMLInputElement;
    const searchButton = screen.getByTitle('Find Product');

    // Enter a barcode
    fireEvent.change(barcodeInput, { target: { value: '12345' } });

    expect(barcodeInput).toHaveValue('12345');

    fireEvent.click(searchButton);

    // Wait for getProductByCode to resolve
    await screen.findByText('Product Data');

    // Check that getProductByCode is called with the correct code
    expect(getProductByCodeMock).toHaveBeenCalledWith('12345');
  });
});

describe('getNormalizedCode', () => {
  it('should remove leading zeros and normalize the code', () => {
    const code = '00012345';
    const normalizedCode = getNormalizedCode(code);
    expect(normalizedCode).toBe('12345');
  });

  it('should normalize the code without leading zeros', () => {
    const code = '12345';
    const normalizedCode = getNormalizedCode(code);
    expect(normalizedCode).toBe('12345');
  });

  it('should normalize the code with special characters', () => {
    const code = '00äöüß12345';
    const normalizedCode = getNormalizedCode(code);
    expect(normalizedCode).toBe('äöüß12345');
  });
});