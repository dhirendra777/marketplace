import { Product } from '../../component/ProductCard/types';
import { LIST_PRODUCTS } from '../../constants/urls';
import useAxios from '../useAxios';

export const useProductsService = () => {
  const { data, error, loading, request } = useAxios<Product[]>('GET', LIST_PRODUCTS);

  return {
    error,
    loading,
    products: data,
    fetchProducts: request,
  };
};
