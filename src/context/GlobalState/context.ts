import { createContext, useContext } from 'react';
import { GlobalStateContextType } from './types';

export const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
