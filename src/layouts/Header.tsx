import Menu from './navigation/Menu';
import { variables } from '../utils/variables';

const Header = () => {
  return (
    <header className='header'>
      <h2 className='header__title'>{variables.siteName}</h2>
      <Menu />
    </header>
  );
};

export default Header;
