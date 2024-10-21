import React from 'react'
import  AuthForm  from "./../../../components/AuthForm";

const signIn = () => {
  return (
    <section className="flex-center text-2xl max-sm:px-6 font-bold">
      <AuthForm type="sign-in"/>
    </section>
  )
}

export default signIn