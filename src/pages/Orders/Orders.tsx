import { memo } from 'react';
import styles from './Orders.module.scss';

const Orders = memo(() => {
  return (
    <div className={styles.container}>
      <h1>Orders</h1>
    </div>
  );
});

export default Orders;
