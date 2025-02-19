import { memo } from 'react';
import { RiMenuLine, RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import { useGlobalState } from '../../context/GlobalState/context';
import Button from '../Button';
import styles from './Header.module.scss';

const Header = memo(() => {
  const { toggleSidenav, isMobile } = useGlobalState();

  return (
    <header className={styles.container}>
      <div className={styles.leftSection}>
        <Button btnClass={styles.toggleSideNavBtn} onClick={toggleSidenav}>
          <RiMenuLine className={styles.icon} />
        </Button>
        <span className={styles.title}>{isMobile ? 'MP' : 'MARKETPLACE'}</span>
      </div>

      <div className={styles.rightSection}>
        <Button btnClass={styles.iconButton}>
          <RiShoppingCartLine className={styles.icon} />
          <span className={styles.badge}>2</span>
        </Button>
        <Button btnClass={styles.iconButton}>
          <RiUserLine className={styles.icon} />
        </Button>
      </div>
    </header>
  );
});

export default Header;
