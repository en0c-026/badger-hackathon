import { createContext } from 'react';
import { RootStore } from '../mobx/store';

export const StoreContext = createContext({} as RootStore);
export const StoreProvider = StoreContext.Provider;
