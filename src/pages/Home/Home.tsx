import { FC, memo } from 'react';
import styles from './Home.module.scss';

const Home: FC = memo(() => {
  return <div className={styles.container}>Home</div>;
});

export default Home;
