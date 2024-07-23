import { Header as HeaderType } from '@/types/types';
import NavBar from '../../ui/NavBar';

interface HeaderProps {
  data: HeaderType;
  showMobileMenu: boolean;
}

const Header = ({ data, showMobileMenu }:HeaderProps) => {
  return (
      <NavBar data={data} showMobileMenu={showMobileMenu} />
  );
};

export default Header;
