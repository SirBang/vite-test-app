import { test, expect, vi } from 'vitest';
import { fetchHelper } from './fetchHelper';

test('fetchHelper function works correctly', async () => {

  // Call the fetchHelper function
  const response = await fetchHelper('/products?limit=10&skip=0', { method: 'GET' });
  expect(Array.isArray(response.products)).toBe(true);
  expect(response.products).toHaveLength(10);
});