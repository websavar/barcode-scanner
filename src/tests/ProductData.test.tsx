import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductData from '../components/ProductData';
import { updateProduct } from '../services/api';

jest.mock('../services/api');

describe('ProductData', () => {
  test('renders productData form', () => {
    const product = {
      id: '1',
      amount_multiplier: '1',
      brand: 'Brand name',
      code: '12345',
      description: 'Description',
      edeka_article_number: false,
      requires_best_before_date: false,
    };

    render(<ProductData productData={product} />);

    // Test that the form elements are rendered
    expect(screen.getByLabelText('id')).toBeInTheDocument();
    expect(screen.getByLabelText('amount_multiplier')).toBeInTheDocument();
    expect(screen.getByLabelText('brand')).toBeInTheDocument();
    expect(screen.getByLabelText('code')).toBeInTheDocument();
    expect(screen.getByLabelText('description')).toBeInTheDocument();
    expect(screen.getByLabelText('edeka_article_number')).toBeInTheDocument();

    // Test that the submit button is rendered
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('the form should include a field for best before date if the product requires', () => {
    const product = {
      id: '1',
      amount_multiplier: '1',
      brand: 'Brand name',
      code: '12345',
      description: 'Description',
      edeka_article_number: false,
      requires_best_before_date: true
    };

    render(<ProductData productData={product} />);

    expect(screen.getByLabelText('id')).toBeInTheDocument();
    expect(screen.getByLabelText('amount_multiplier')).toBeInTheDocument();
    expect(screen.getByLabelText('brand')).toBeInTheDocument();
    expect(screen.getByLabelText('code')).toBeInTheDocument();
    expect(screen.getByLabelText('description')).toBeInTheDocument();
    expect(screen.getByLabelText('best_before_date')).toBeInTheDocument();
  });

  test('the form should include a field as trade_item_unit_descriptor and be transformed if the field trade_item_descriptor is presented instead', () => {
    const product = {
      id: '1',
      amount_multiplier: '1',
      brand: 'Brand name',
      code: '12345',
      description: 'Description',
      trade_item_descriptor: 'item descriptor'
    };

    render(<ProductData productData={product} />);

    expect(screen.getByLabelText('id')).toBeInTheDocument();
    expect(screen.getByLabelText('amount_multiplier')).toBeInTheDocument();
    expect(screen.getByLabelText('brand')).toBeInTheDocument();
    expect(screen.getByLabelText('code')).toBeInTheDocument();
    expect(screen.getByLabelText('description')).toBeInTheDocument();
    expect(screen.getByLabelText('trade_item_unit_descriptor')).toBeInTheDocument();
  });
});
