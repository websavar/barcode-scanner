import { createContext } from 'react';
import { ContextType } from './types'

const Context = createContext<ContextType>({
  isOpen: false,
  openModal: () => { },
  closeModal: () => { },
});

export default Context;
