'use client'
import styles from '@/app/page.module.scss';
import Dashboard from '@/components/layout/dashboard/Dashboard';
import useAppLogic from '@/hooks/useAppLogic';
import Login from '@/components/layout/login/Login';

const App = () => {
  const { data, showMobileMenu } = useAppLogic();
  const isLogged = false;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLogged ? <Dashboard data={data} showMobileMenu={showMobileMenu}/>  : <Login />}
    </>
  );
};

export default App;

