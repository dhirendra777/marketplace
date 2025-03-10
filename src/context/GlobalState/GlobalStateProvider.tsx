import { useEffect, useState } from 'react';
import { GlobalStateContext } from './context';
import { GlobalStateProviderProps } from './types';

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState<boolean>(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidenav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <GlobalStateContext.Provider value={{ isSidenavOpen: isOpen, isMobile, toggleSidenav }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
