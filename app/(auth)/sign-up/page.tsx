import React from 'react'
import  AuthForm  from "./../../../components/AuthForm";

const SignUp = () => {
  return (
    <section className="flex-center text-2xl max-sm:px-6 py-10 font-bold">
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp