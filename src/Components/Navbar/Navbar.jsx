import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MobileNav from "./MobileNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  function onMobileOpenHandler() {
    setMobile(true);
  }

  function onMobileCloseHandler() {
    setMobile(false);
  }

  return (
    <nav className="nav-container font-bold">
      <section className="nav-branding">
        <span className="nav-branding-icon">
          <FontAwesomeIcon icon={faComputer} />
        </span>
        <span className="nav-branding-title">
          <span className="text-blue">KOM</span>INFO
        </span>
      </section>
      <section className="nav-item-container">
        <NavLink to="/">Beranda</NavLink>
        <NavLink to="profile">Profil</NavLink>
        <NavLink to="login">Login</NavLink>
      </section>
      <div className="mobile-open text-blue" onClick={onMobileOpenHandler} >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {mobile ? <MobileNav onClickHandler={onMobileCloseHandler} /> : null}
    </nav>
  );
}
