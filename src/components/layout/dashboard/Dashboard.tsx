'use client'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Dashboard = ({data}: any, showMobileMenu: any) => {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header data={data.header} showMobileMenu={showMobileMenu} />
      <MainContent data={data.mainContent} />
      <Footer data={data.footer} />
    </div>
  );
};

export default Dashboard;
