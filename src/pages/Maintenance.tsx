import { variables } from '../utils/variables';

const Maintenance = () => {
  return (
    <div className='page-layout'>
      <header className='header'>
        <h2 className='header__title'>{variables.siteName}</h2>
      </header>
      <main className={`main maintenance`}>
        <p className='maintenance__text'>Site en maintenance</p>
      </main>
      <footer className='footer'>
        <p className='footer__text'>
          Un bien rare, une opportunité unique ! Quel que soit votre projet de
          vie, cette propriété vous offrira un cadre exceptionnel.
        </p>
        <p className='footer__credits'>
          © 2025 tous droits réservés, réalisé par{' '}
          <a
            href='https://segoleneganzin.fr'
            rel='noreferrer'
            target='_blank'
            className='footer__credits-link bold'
          >
            Ségolène GANZIN
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Maintenance;
