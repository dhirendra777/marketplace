import { memo, useEffect, useState } from 'react';
import ProductCard from '../../component/ProductCard';
import { Product } from '../../component/ProductCard/types';
import { useProductsService } from '../../hooks/services/useProductsService';
import styles from './Products.module.scss';

const Products = memo(() => {
  const [products, setProducts] = useState<Product[]>([]);
  const { fetchProducts, loading, error } = useProductsService();

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts((res || []) as Product[]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.message}>Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.message}>Error loading products. Please try again.</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.productsGrid}>
        {products?.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
});

Products.displayName = 'Products';

export default Products;
