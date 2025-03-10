import Cta from '../components/Cta';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Un bien rare, une opportunité unique ! Quel que soit votre projet de
        vie, cette propriété vous offrira un cadre exceptionnel.
      </p>
      <Cta />
      <p className='footer__credits'>
        © 2025 tous droits réservés, réalisé par
        <a
          href='https://segoleneganzin.fr'
          rel='noreferrer'
          target='_blank'
          className='footer__credits-link'
        >
          Ségolène GANZIN
        </a>
      </p>
    </footer>
  );
};

export default Footer;
