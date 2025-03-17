import { createContext } from 'react';

export interface ContactModalContextType {
  isContactOpen: boolean;
  toggleModal: () => void;
}

// context creation
export const ContactModalContext = createContext<
  ContactModalContextType | undefined
>(undefined);
