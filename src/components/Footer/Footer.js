import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    let year = new Date().getFullYear()

    return (
        <div className='footer'>
            <div className='links'>
                <div>
                    <p>Conditions</p>
                    <p><Link to='/shop'>Shop</Link></p>
                    <p><Link to='/blog'>Blog</Link></p>
                    <p><Link to='privacy'>privacy policy</Link></p>
                    <p>Something here</p>
                </div>
                <div>
                    <p>Something else</p>
                    <p><Link to='/members' title='our cooperative members'>Members</Link></p>
                    <p><Link to='/contact' title="click to contact us">Contact Us</Link></p>
                    <p>Something else</p>
                </div>
                <div>
                    <p>More Here</p>
                    <p><Link to='/faq' title="some questions and answers">FAQs</Link></p>
                    <p>Reviews</p>
                    <a href="https://www.google.com/maps/@33.0997978,-4.5534665,7.25z" rel="noreferrer" title='view it in google maps!' target='_blank'>Location</a>
                    <p><Link to='/shipping-policy' title="our Shipping policy">Shipping policy</Link></p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; {year} <a href="https://github.com/MohcineDev" target="_blank" rel="noreferrer">MohcineDev</a> </p>
                <div>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <title>instagram</title>
                            <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" />
                            <rect style={{ strokeWidth: '3px', fill: 'none', stroke: '#fff', strokeMiterlimit: '10' }} x="9" y="9" width="32" height="32" rx="7.23" />
                            <circle cx="25" cy="25" r="5.75" style={{ strokeWidth: '3px', fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }} />
                            <circle cx="35.04" cy="14.96" r="1.96" style={{ fill: '#fff' }} />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <title>facebook</title>
                            <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                            <path style={{ fill: '#fff' }} d="M27.2,19.15V16.78a1.25,1.25,0,0,1,1.31-1.42h3.32V10.28l-4.57,0c-5.08,0-6.23,3.79-6.23,6.21v2.68H18.09v5.92h3V39.88H27V25.07h4.4l.21-2.33.33-3.59Z" />
                        </svg>
                    </a>
                    <a href="https://wa.me/+21260000000?text=salam Hi" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <title>whatsapp</title>
                            <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                            <path style={{ fill: '#fff' }} d="M39.8,23.19a14.54,14.54,0,0,0-29-.27c0,.21,0,.42,0,.63A14.2,14.2,0,0,0,12.82,31l-2.63,7.74,8-2.56A14.56,14.56,0,0,0,39.81,23.55C39.81,23.43,39.8,23.31,39.8,23.19ZM25.27,35.68a12.22,12.22,0,0,1-6.73-2l-4.69,1.5,1.52-4.51a12,12,0,0,1-2.32-7.11,11.17,11.17,0,0,1,.06-1.17,12.23,12.23,0,0,1,24.34.22c0,.32,0,.63,0,.95A12.19,12.19,0,0,1,25.27,35.68Z" />
                            <path style={{ fill: '#fff' }} d="M31.93,26.46c-.36-.18-2.11-1-2.44-1.15s-.56-.17-.8.18-.92,1.15-1.13,1.38-.42.27-.77.09a9.57,9.57,0,0,1-2.87-1.75,10.82,10.82,0,0,1-2-2.45c-.21-.35,0-.54.16-.72s.35-.41.53-.62l.13-.17a4,4,0,0,0,.23-.42.64.64,0,0,0,0-.62c-.09-.18-.8-1.92-1.1-2.62s-.59-.59-.8-.59-.45,0-.68,0a1.31,1.31,0,0,0-.95.44,3.93,3.93,0,0,0-1.25,2.95,4.36,4.36,0,0,0,.18,1.2A8.25,8.25,0,0,0,19.63,24c.18.23,2.47,3.92,6.09,5.33s3.62.95,4.28.89a3.62,3.62,0,0,0,2.4-1.68,2.93,2.93,0,0,0,.21-1.69C32.52,26.73,32.28,26.64,31.93,26.46Z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <title>youtube</title>
                            <circle style={{ fill: "#30619f" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                            <path style={{ fill: '#fff' }} d="M39.51,18.9a6.87,6.87,0,0,0-1.18-3.07,4.11,4.11,0,0,0-3-1.31C31.22,14.21,25,14.21,25,14.21h0s-6.21,0-10.36.31a4.11,4.11,0,0,0-3,1.31,6.87,6.87,0,0,0-1.18,3.07,48,48,0,0,0-.3,5v2.35a47.78,47.78,0,0,0,.3,5,6.87,6.87,0,0,0,1.18,3.07,4.9,4.9,0,0,0,3.26,1.32c2.37.23,10.07.31,10.07.31s6.22,0,10.37-.32a4.16,4.16,0,0,0,3-1.31,6.87,6.87,0,0,0,1.18-3.07,47.78,47.78,0,0,0,.3-5V23.89A48,48,0,0,0,39.51,18.9Zm-9.57,5.86-8,4.32V20.4l3.61,2Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
