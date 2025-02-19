import { FC, memo, ReactNode } from 'react';
import { NavLink } from 'react-router';
import styles from './NavItem.module.scss';

interface NavItemProps {
  onClick: () => void;
  path: string;
  children: ReactNode;
}

const NavItem: FC<NavItemProps> = memo(({ onClick, path, children }) => {
  return (
    <NavLink
      onClick={onClick}
      to={path}
      className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
    >
      {children}
    </NavLink>
  );
});

export default NavItem;
