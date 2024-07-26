import { Header as HeaderType } from '@/types/types';
import NavBar from '../../ui/NavBar';

interface HeaderProps {
  data: HeaderType;
  showMobileMenu: Boolean;
  showLoginMenu: Boolean;
  isLogged: Boolean;
}

const Header = ({ data, showMobileMenu, isLogged , showLoginMenu}: HeaderProps) => {
  return (
      <NavBar data={data} showMobileMenu={showMobileMenu} isLogged={isLogged} showLoginMenu={showLoginMenu}/>
  );
};

export default Header;
