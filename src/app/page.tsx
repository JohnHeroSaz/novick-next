'use client'
import Dashboard from '@/components/layout/dashboard/Dashboard';
import useAppLogic from '@/hooks/useAppLogic';
import Login from '@/components/layout/login/Login';

import { instance } from '../services/login/loginService'
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

const App = () => {
  const { data, showMobileMenu } = useAppLogic();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <MsalProvider instance={instance}>
      <AuthenticatedTemplate>
        <Dashboard data={data} showMobileMenu={showMobileMenu} isLogged={true} showLoginMenu={true}/>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login data={data} isLogged={false} showLoginMenu={true}/>
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
};

export default App;

