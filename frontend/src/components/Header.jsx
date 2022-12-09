import React from 'react';
import headerLogo from '../images/logoPlace.svg';
import { Link, useLocation } from "react-router-dom";

function Header({handleSignOut, email}) {
  const location = useLocation()
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип сайта с названием Место Россия" />
      {location.pathname === '/signup' &&
        <Link to="/signin" className='header__link'>Войти</Link>}
      {location.pathname === '/signin' &&
        <Link to = 'signup' className='header__link'>Регистрация</Link>}
      {location.pathname === '/' &&
        <ul className='header__link-container'>
          <li><Link to = '/' className='header__link'>{email}</Link></li>
          <li><button onClick={handleSignOut} className='header__link header__button'>Выйти</button></li>
        </ul>}
    </header>
  );
}

export default Header;