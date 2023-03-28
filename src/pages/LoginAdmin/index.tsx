import LoginAdminPage from '@/module/LoginAdminPage'
import React from 'react'

const LoginAdmin = () => {
  return (
    <div>
        <LoginAdminPage/>
    </div>
  )
}


LoginAdmin.getLayout = function getLayout(page: React.ReactElement){
  return (page)
}
export default LoginAdmin