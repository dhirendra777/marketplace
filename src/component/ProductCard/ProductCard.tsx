import { FC, memo, useMemo } from 'react';
import { RiShoppingCartLine, RiStarFill } from 'react-icons/ri';
import { formatCurrency } from '../../utils/utils';
import Button from '../Button';
import styles from './ProductCard.module.scss';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = memo(({ product }) => {
  const price = useMemo(() => {
    return formatCurrency(product.price);
  }, [product?.price]);

  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.rating && (
          <div className={styles.rating}>
            <RiStarFill className={styles.starIcon} />
            <span>{product.rating.rate}</span>
            <span className={styles.ratingCount}>({product.rating.count})</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.description}>
            {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
          </p>
        </div>
        <div className={styles.actions}>
          <p className={styles.price}>{price}</p>
          <Button btnClass={styles.addToCartBtn}>
            <RiShoppingCartLine className={styles.icon} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
