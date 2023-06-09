import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3001';

// getting db.json data from online server (https://glitch.com)
const API_BASE_URL = 'https://product-barcode-scanner.glitch.me';

export const getProductByCode = async (code: string) => {
  const response = await axios.get(`${API_BASE_URL}/products?code=${code}`);
  return response.data[0];
};

export const updateProduct = async (product: any) => {
  const response = await axios.put(`${API_BASE_URL}/products/${product.id}`, product);
  return response.data;
};

export const addProduct = async (product: any) => {
  const response = await axios.post(`${API_BASE_URL}/products`, product);
  return response.data;
};