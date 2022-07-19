import React from 'react';
import { Link } from "react-router-dom";
import SignForm from './SignForm';

const Register = ({handleReqest}) => {
  return(
  <SignForm
    handleReqest={handleReqest}
    title={'Регистрация'}
    buttonTitle={'Зарегистрироваться'}>
    <div className="register">
      <p className='register__already'>Уже зарегистрированы?</p>
      <Link to="/signin" className="register__login-link">Войти</Link>
    </div>
  </SignForm>
  )
}
export default Register;