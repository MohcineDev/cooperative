import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav>
             <Link to='/' className='logo'>Title</Link>
             <div>
                  <Link to='/'>About</Link>
                  <Link to='/'>Categories</Link>
                  <Link to='/'>Location</Link>
             </div>
        </nav>
    )
}

export default Navbar
