import React, { useState } from 'react'
import './navbar.css'
import Social from '../Social'
import { Logo, Nav, LinksWrap, Span, Links, Socials, SocialLinks, DisplayNavBtn } from './style.js'

function Navbar() {

    const [display, setDisplay] = useState(false)

    // remove useEffect and toggle method because it's not working properly
    //this way is better
    const DisplayNav = () => {
        setDisplay(!display)
    }

    return (
        <Nav>
            <Logo to='/'>CooperativeName</Logo>
            <LinksWrap className={display ? 'show' : null}>
                <Links to='/shop'>Shop</Links>
                <Links to='/blog'>Blog</Links>
                <Links to='/contact'>Contact</Links>
                <Links to='/members'>Members</Links>
                <Socials className="socials">
                    <Span>M</Span>
                    <SocialLinks>
                        <Social color1='#fff' color2='#3C85B5' />
                    </SocialLinks>
                </Socials>
            </LinksWrap>
            <DisplayNavBtn id="btn" className={display ? 'rotate' : null} onClick={DisplayNav} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <polygon fill="#fff" points="4 8 4 13 50 13 50 8 " />
                <polygon fill="#fff" points="4 20 4 25 50 25 50 20 " />
                <polygon fill="#fff" points="4 32 4 37 50 37 50 32 " />
            </DisplayNavBtn>
        </Nav>
    )
}

export default Navbar
