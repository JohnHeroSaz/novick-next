'use client'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


interface DashboardProps{
  data: any,
  showMobileMenu: Boolean,
  showLoginMenu: Boolean,
  isLogged: Boolean
}

const Dashboard = ({data, showMobileMenu, isLogged, showLoginMenu} : DashboardProps) => {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header data={data.header} showMobileMenu={showMobileMenu} showLoginMenu={showLoginMenu} isLogged={isLogged}/>
      <MainContent data={data.mainContent} />
      <Footer data={data.footer} />
    </div>
  );
};

export default Dashboard;
