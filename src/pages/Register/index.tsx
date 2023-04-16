import RegisterPage from '@/module/Register'
import React from 'react'

const Register = () => {
  return (
    <div>
      <RegisterPage/>
    </div>
  )
}

Register.getLayout = function getLayout(page:React.ReactElement){
  return (
    page
  )
}

export default Register