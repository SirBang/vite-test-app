import { test, expect, vi } from 'vitest';
import { fetchHelper } from './fetchHelper';

test('fetchHelper function works correctly', async () => {

  // Call the fetchHelper function
  const response = await fetchHelper('/products?limit=10&skip=0', { method: 'GET' });
  expect(Array.isArray(response.products)).toBe(true);
  expect(response.products).toHaveLength(10);

});

test('Search works correctly', async () => {
    const response = await fetchHelper('/products/search?q=iPhone+9', { method: 'GET' });
    const product = response.products[0]
    expect(product.description).toEqual("An apple mobile which is nothing like apple");
    expect(product.title).toEqual("iPhone 9");
    expect(product.price).toEqual(549);
});

test('Single Search works correctly', async () => {
    const response = await fetchHelper('/products/30', { method: 'GET' });
    const product = response;
    expect(product.description).toEqual("Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality");
    expect(product.title).toEqual("Key Holder");
    expect(product.price).toEqual(30);
});
  
  
