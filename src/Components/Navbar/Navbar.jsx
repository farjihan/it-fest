import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className='nav-container text-xl font-bold'>
            <section className='nav-branding'>
                Branding
            </section>
            <section className='nav-item-container'>
                <NavLink to="home" >Beranda</NavLink>
                <NavLink to="profile" >Profil</NavLink>
                <NavLink to="" >Login</NavLink>
            </section>
        </nav>
    )
}
