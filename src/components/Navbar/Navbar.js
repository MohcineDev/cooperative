import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to='/' className='logo'>Cooperative</Link>
            <div>
                <Link to='/'>About</Link>
                <a href='#categories'>Categories</a>
                <Link to='/'>Location</Link>
                <a href='#gallery'>Gallery</a>
            </div>
        </nav>
    )
}

export default Navbar
