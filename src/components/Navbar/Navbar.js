import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to='/' className='logo'>Cooperative</Link>
            <div>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/faq'>FAQs</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
