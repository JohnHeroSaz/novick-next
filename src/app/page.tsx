'use client'
import Dashboard from '@/components/layout/dashboard/Dashboard';
import useAppLogic from '@/hooks/useAppLogic';
import Login from '@/components/layout/login/Login';

import { instance } from '../services/login/loginService'
import { MsalProvider } from '@azure/msal-react';
import ProfileProvider from '@/providers/profileProvider';

const App = () => {
  const { data, showMobileMenu } = useAppLogic();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <MsalProvider instance={instance}>
      <ProfileProvider instance={instance}>
          <Dashboard data={data} showMobileMenu={showMobileMenu} showLoginMenu={true} />
      </ProfileProvider>
    </MsalProvider>
  );
};

export default App;

