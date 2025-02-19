import { useState } from 'react';
import { GlobalStateContext } from './context';
import { GlobalStateProviderProps } from './types';

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const isMobile = window.innerWidth < 768;

  const toggleSidenav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <GlobalStateContext.Provider value={{ isSidenavOpen: isOpen, isMobile, toggleSidenav }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
