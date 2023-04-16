import Login from '@/module/Login'
import React from 'react'

const LoginPage = () => {
  return (
    <>
        <Login/>
    </>
  )
}
LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
      page
  );
};

export default LoginPage