'use client'

import Header from "../dashboard/Header";

interface LoginProps {
  data: any;
  isLogged: Boolean;
  showLoginMenu: Boolean;
}

const Login = ({ data, isLogged, showLoginMenu }: LoginProps) => {

  return (
    <>
      <Header data={data.header} showMobileMenu={false} isLogged={isLogged} showLoginMenu={showLoginMenu} ></Header>
      <p>You must be logged to continue...</p>
    </>
  );
};

export default Login;