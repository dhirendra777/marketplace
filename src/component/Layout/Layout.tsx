import { FC, memo } from 'react';
import { Outlet } from 'react-router';
import { useGlobalState } from '../../context/GlobalState/context';
import Header from '../Header';
import SideNav from '../Sidenav';
import styles from './Layout.module.scss';

const Layout: FC = memo(() => {
  const { isMobile } = useGlobalState();

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobileStyles : ''}`}>
      <SideNav />
      <div className={styles.mainContainer}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default Layout;
