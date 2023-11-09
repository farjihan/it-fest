import React from 'react'
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function MobileNav({onClickHandler}) {
  return (
    <div className="mobile-nav-container">
      <span className='mobile-close text-blue' onClick={onClickHandler} >
        <FontAwesomeIcon icon={faCircleXmark} />
      </span>
      <nav className="mobile-nav-items">
        <div>
          <NavLink to="/">Beranda</NavLink>
        </div>
        <div>
          <NavLink to="Profil">Profil</NavLink>
        </div>
        <div>
          <NavLink to="Login">Login</NavLink>
        </div>
      </nav>
    </div>
  );
}
