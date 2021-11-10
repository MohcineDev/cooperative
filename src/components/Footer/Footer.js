import React from 'react'
import { Copyright, Email, FooterDiv, Links, Title, A } from './style.js'
import Social from '../Social.js'

function Footer() {
    let year = new Date().getFullYear()

    return (
        <FooterDiv>
            <Links>
                <div>
                    <Title>Conditions</Title>
                    <A to='/shop'>Shop</A>
                    <A to='/blog'>Blog</A>
                    <A to='/privacy'>privacy policy</A>
                    <A>Events Calendar</A>
                </div>
                <div>
                    <Title>Related</Title>
                    <A to='/members' title='our cooperative members'>Members</A>
                    <A to='/contact' title="click to contact us">Contact Us</A>
                    <A>Join us</A>
                    <A>Departments</A>
                </div>
                <div>
                    <Title>More</Title>
                    <A to='/about' >About</A>
                    <A to='/faq' title="some questions and answers">FAQs</A>
                    <A href="#">Reviews</A>
                    <a href="https://www.google.com/maps/place/Errachidia/@31.9350557,-4.461115,13z/data=!3m1!4b1!4m5!3m4!1s0xd984a900c95d9db:0xe364e4f136aef8b3!8m2!3d31.9265237!4d-4.4274902" rel="noreferrer" title='view it in google maps!' target='_blank'>Location</a>
                    <A to='/shipping-policy' title="our Shipping policy">Shipping policy</A>
                </div>
            </Links>
            <Copyright>
                <p>Copyright &copy; {year}  <Email href="https://github.com/MohcineDev" target="_blank" rel="noreferrer">MohcineDev</Email>
                </p>
                <div>
                    <Social color1='#fff' color2='#3C85B5'/>
                </div>
            </Copyright>
        </FooterDiv>
    )
}

export default Footer
