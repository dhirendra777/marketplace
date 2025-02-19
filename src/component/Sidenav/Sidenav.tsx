import { memo, useCallback } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useGlobalState } from '../../context/GlobalState';
import Button from '../Button';
import NavItem from './NavItem/NavItem';
import styles from './Sidenav.module.scss';
import { navConfig } from './config';

const Sidenav = memo(() => {
  const { isSidenavOpen: isOpen, isMobile, toggleSidenav } = useGlobalState();

  const onSidenavItemClick = useCallback(() => {
    if (isMobile) toggleSidenav();
  }, [toggleSidenav, isMobile]);

  return (
    <div className={`${styles.container} ${!isOpen ? styles.closed : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoText}>MP</span>
        {isMobile && (
          <Button btnClass={styles.closeSidenavBtn} onClick={toggleSidenav}>
            <RiCloseLine className={styles.icon} />
          </Button>
        )}
      </div>
      <nav className={styles.nav}>
        {navConfig.map((navItem) => (
          <NavItem path={navItem.path} onClick={onSidenavItemClick}>
            {navItem.icon}
            <span className={styles.label}>{navItem.title}</span>
          </NavItem>
        ))}
      </nav>
    </div>
  );
});

export default Sidenav;
