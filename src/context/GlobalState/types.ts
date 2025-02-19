import { ReactNode } from 'react';

export interface GlobalStateContextType {
  isSidenavOpen: boolean;
  isMobile: boolean;
  toggleSidenav: () => void;
}

export interface GlobalStateProviderProps {
  children: ReactNode;
}
