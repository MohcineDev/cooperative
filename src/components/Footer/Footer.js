import React from 'react'
import { Copyright, Email, FooterDiv, Links, Title, ALink} from './style.js'
import Social from '../Social.js'

function Footer() {
    let year = new Date().getFullYear()

    return (
        <FooterDiv>
            <Links>
                <div>
                    <Title>Conditions</Title>
                    <ALink to='/shop'>Shop</ALink>
                    <ALink to='/blog'>Blog</ALink>
                    <ALink to='/privacy'>privacy policy</ALink>
                    <ALink to=''>Events Calendar</ALink>
                </div>
                <div>
                    <Title>Related</Title>
                    <ALink to='/members' title='our cooperative members'>Members</ALink>
                    <ALink to='/contact' title="click to contact us">Contact Us</ALink>
                    <ALink to=''>Join us</ALink>
                    <ALink to=''>Departments</ALink>
                </div>
                <div>
                    <Title>More</Title>
                    <ALink to='/about' >About</ALink>
                    <ALink to='/faq' title="some questions and answers">FAQs</ALink>
                    <ALink to="#">Reviews</ALink>
                    <a href="https://www.google.com/maps/place/Errachidia/@31.9350557,-4.461115,13z/data=!3m1!4b1!4m5!3m4!1s0xd984a900c95d9db:0xe364e4f136aef8b3!8m2!3d31.9265237!4d-4.4274902" rel="noreferrer" title='view it in google maps!' target='_blank'>Location</a>
                    <ALink to='/shipping-policy' title="our Shipping policy">Shipping policy</ALink>
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
