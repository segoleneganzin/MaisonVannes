import { useContext } from 'react';
import { ContactModalContext } from '../../contexts/contactModal/ContactModalContext';

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      'useContactModal doit être utilisé dans un ContactModalProvider'
    );
  }
  return context;
};
