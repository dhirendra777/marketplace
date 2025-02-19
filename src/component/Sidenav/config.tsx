import { RiFileListLine, RiSettings4Line, RiShoppingBag3Line } from 'react-icons/ri';
import styles from './Sidenav.module.scss';

export const navConfig = [
  {
    title: 'Products',
    path: '/products',
    icon: <RiShoppingBag3Line className={styles.icon} />,
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <RiFileListLine className={styles.icon} />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <RiSettings4Line className={styles.icon} />,
  },
];
