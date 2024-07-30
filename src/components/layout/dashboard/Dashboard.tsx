'use client'
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ProfileContext from '@/context/ProfileContext';
interface DashboardProps{
  data: any,
  showMobileMenu: Boolean,
  showLoginMenu: Boolean,
}

const Dashboard = ({data, showMobileMenu, showLoginMenu} : DashboardProps) => {
  const { isLogged } = React.useContext(ProfileContext);

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
