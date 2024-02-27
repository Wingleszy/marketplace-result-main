import React from 'react'
import { StyledHeader } from './StyledHeader'
import { LoginForm } from './LoginForm'
import Footer from "./Footer/Footer";

export const Login = () => {
  return (
    <>
        <StyledHeader />
        <LoginForm />
        <Footer />
    </>
  )
}
