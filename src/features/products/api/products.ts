import { axiosClient } from '@/lib/axios';

import { ProductsResponse } from '../types.ts';

export const getProducts = ({ page }: { page?: number }): Promise<ProductsResponse> => {
  const params = page ? `page=${page}` : '';
  const url = `/products${params}`;

  return axiosClient.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
