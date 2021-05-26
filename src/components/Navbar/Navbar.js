import React, { useState } from 'react'
import './navbar.css'

import { Logo, Nav, LinksWrap, Span, Links, Socials, SocialLinks,  Account, DisplayNavBtn } from './style.js'

function Navbar() {

    const [display, setDisplay] = useState(false)

    // remove useEffect and toggle method because it's not working properly
    //this way is better
    const DisplayNav = () => {
        setDisplay(!display)
    }

    return (
        <Nav>
            <Logo to='/'>Cooperative</Logo>
            <LinksWrap className={display ? 'show' : null}>
                <Links to='/shop'>Shop</Links>
                <Links to='/contact'>Contact</Links>
                <Links to='/faq'>FAQs</Links>
                <Links to='/blog'>Blog</Links>
                <Socials className="socials">
                    <Span>M</Span>
                    <SocialLinks>
                        <Account href="https://www.instagram.com" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <title>instagram</title>
                                <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" />
                                <rect style={{ strokeWidth: '3px', fill: 'none', stroke: '#fff', strokeMiterlimit: '10' }} x="9" y="9" width="32" height="32" rx="7.23" />
                                <circle cx="25" cy="25" r="5.75" style={{ strokeWidth: '3px', fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }} />
                                <circle cx="35.04" cy="14.96" r="1.96" style={{ fill: '#fff' }} />
                            </svg>
                        </Account>
                        <Account href="https://twitter.com/MohcineDev" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <title>twitter</title>
                                <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                                <path style={{ fill: '#fff' }} d="M39.81,17.37a12,12,0,0,1-3.49.94A6,6,0,0,0,39,15a12.15,12.15,0,0,1-3.86,1.46,6,6,0,0,0-10.35,5.45,17.32,17.32,0,0,1-12.52-6.25,5.84,5.84,0,0,0-.83,3,6,6,0,0,0,2.71,5,6.11,6.11,0,0,1-2.76-.75V23a5.78,5.78,0,0,0,.42,2.17,6.06,6.06,0,0,0,4.46,3.7,6.05,6.05,0,0,1-1.6.21,6.31,6.31,0,0,1-1.15-.11,6.06,6.06,0,0,0,5.68,4.15,12.29,12.29,0,0,1-7.55,2.57,11.64,11.64,0,0,1-1.45-.09,17.4,17.4,0,0,0,9.32,2.69A16.91,16.91,0,0,0,36.38,24.85a16.52,16.52,0,0,0,.41-3.61c0-.26,0-.51,0-.77A12.4,12.4,0,0,0,39.81,17.37Z" />
                            </svg>
                        </Account>
                        <Account href="https://wa.me/+21260000000?text=salam Hi" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <title>whatsapp</title>
                                <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                                <path style={{ fill: '#fff' }} d="M39.8,23.19a14.54,14.54,0,0,0-29-.27c0,.21,0,.42,0,.63A14.2,14.2,0,0,0,12.82,31l-2.63,7.74,8-2.56A14.56,14.56,0,0,0,39.81,23.55C39.81,23.43,39.8,23.31,39.8,23.19ZM25.27,35.68a12.22,12.22,0,0,1-6.73-2l-4.69,1.5,1.52-4.51a12,12,0,0,1-2.32-7.11,11.17,11.17,0,0,1,.06-1.17,12.23,12.23,0,0,1,24.34.22c0,.32,0,.63,0,.95A12.19,12.19,0,0,1,25.27,35.68Z" />
                                <path style={{ fill: '#fff' }} d="M31.93,26.46c-.36-.18-2.11-1-2.44-1.15s-.56-.17-.8.18-.92,1.15-1.13,1.38-.42.27-.77.09a9.57,9.57,0,0,1-2.87-1.75,10.82,10.82,0,0,1-2-2.45c-.21-.35,0-.54.16-.72s.35-.41.53-.62l.13-.17a4,4,0,0,0,.23-.42.64.64,0,0,0,0-.62c-.09-.18-.8-1.92-1.1-2.62s-.59-.59-.8-.59-.45,0-.68,0a1.31,1.31,0,0,0-.95.44,3.93,3.93,0,0,0-1.25,2.95,4.36,4.36,0,0,0,.18,1.2A8.25,8.25,0,0,0,19.63,24c.18.23,2.47,3.92,6.09,5.33s3.62.95,4.28.89a3.62,3.62,0,0,0,2.4-1.68,2.93,2.93,0,0,0,.21-1.69C32.52,26.73,32.28,26.64,31.93,26.46Z" />
                            </svg>
                        </Account>
                        <Account href="https://www.youtube.com" rel="noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <title>youtube</title>
                                <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                                <path style={{ fill: '#fff' }} d="M39.51,18.9a6.87,6.87,0,0,0-1.18-3.07,4.11,4.11,0,0,0-3-1.31C31.22,14.21,25,14.21,25,14.21h0s-6.21,0-10.36.31a4.11,4.11,0,0,0-3,1.31,6.87,6.87,0,0,0-1.18,3.07,48,48,0,0,0-.3,5v2.35a47.78,47.78,0,0,0,.3,5,6.87,6.87,0,0,0,1.18,3.07,4.9,4.9,0,0,0,3.26,1.32c2.37.23,10.07.31,10.07.31s6.22,0,10.37-.32a4.16,4.16,0,0,0,3-1.31,6.87,6.87,0,0,0,1.18-3.07,47.78,47.78,0,0,0,.3-5V23.89A48,48,0,0,0,39.51,18.9Zm-9.57,5.86-8,4.32V20.4l3.61,2Z" />
                            </svg>
                        </Account>
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
