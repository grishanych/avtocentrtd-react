import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import Logo from '../images/logo.png';
import Phone from '../images/phone.png';
import Arrow from '../images/arrow.png';
import BgImg from '../images/bg1.jpg'

function Nav() {
  return (
    <div className='navbar' style={{ backgroundImage:`url(${BgImg})` }}>
      <div className='nav-menu'>
      <Link to="/">
        <img src={Logo} width={187} height={148} />
      </Link>
      <li>
        <Link to="/">Головна</Link>
      </li>
      <li>
        <Link to="/chain">Мережа</Link>
      </li>
      <li>
        <Link to="/price">Ціни</Link>
      </li>
      <li>
        <Link to="/contacts">Контакти</Link>
      </li>
      <div className='contacts-phone'>
      <div className='phones'><img src={Phone} /><p> пр. Ч. Калини  <br />(096) 585 67 15 </p> <img src={Arrow} /></div>
      <div className='phones'><img src={Phone} /><p>вул. Стуса, 18 <br />(068) 033 78 78</p> <img src={Arrow} /></div>
      <div className='phones'><img src={Phone} /><p>вул. Трускавецька, 1 <br />(067) 172 79 78</p> <img src={Arrow} /></div>
      </div>
      </div>
    </div>
  );
}

export default Nav;
