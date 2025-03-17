import { ReactNode, useState } from 'react';
import { ContactModalContext } from './ContactModalContext';

// Provider to wrap the app
export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleModal = () => setIsContactOpen(!isContactOpen);

  return (
    <ContactModalContext value={{ isContactOpen, toggleModal }}>
      {children}
    </ContactModalContext>
  );
};
