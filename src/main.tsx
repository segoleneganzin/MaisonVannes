import { createRoot } from 'react-dom/client';
import './stylesheet/style.scss';
import { ContactModalProvider } from './contexts/contactModal/ContactModalProvider';
import Home from './pages/Home';
import Contact from './layouts/Contact';

createRoot(document.getElementById('root')!).render(
  <ContactModalProvider>
    <Home />
    <Contact />
  </ContactModalProvider>
);
