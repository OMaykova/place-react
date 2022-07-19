import React from 'react';
import SignForm from './SignForm';

const Login = ({handleReqest}) => {
  return(
    <SignForm 
      handleReqest={handleReqest}
      title={'Вход'}
      buttonTitle={'Войти'}
    />
  )
}
export default Login;