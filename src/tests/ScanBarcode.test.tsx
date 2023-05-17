import { render, screen, fireEvent } from '@testing-library/react';
import ScanBarcode from 'components/ScanBarcode';

describe('ScanBarcode', () => {
  test('calls handleScan with barcode input', () => {
    const handleScanMock = jest.fn();

    render(<ScanBarcode handleScan={handleScanMock} />);

    const barcodeInput = screen.getByPlaceholderText('Barcode number') as HTMLInputElement;
    const searchButton = screen.getByTitle('Find Product');

    // Enter a barcode
    fireEvent.change(barcodeInput, { target: { value: '168' } });

    fireEvent.click(searchButton);

    // Check that handleScan is called with the correct barcode
    expect(handleScanMock).toHaveBeenCalledWith('168');
  });

  test('clears the barcode input after searching', () => {
    const handleScanMock = jest.fn();

    render(<ScanBarcode handleScan={handleScanMock} />);

    const barcodeInput = screen.getByPlaceholderText('Barcode number') as HTMLInputElement;
    const searchButton = screen.getByTitle('Find Product');

    fireEvent.change(barcodeInput, { target: { value: '168' } });

    fireEvent.click(searchButton);

    expect(barcodeInput.value).toBe('');
  });
});
