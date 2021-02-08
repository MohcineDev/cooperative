import React, { useEffect } from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaSkype } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './contact.css'

function Contact() {

    function remove(input) {
        input.addEventListener('focus', function () {
            this.placeholder = ''
        })
    }
    function display(input) {
        input.addEventListener('blur', function () {
            this.placeholder = this.getAttribute('aria-label')
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.querySelectorAll('input').forEach(item => remove(item))
        document.querySelectorAll('textarea').forEach(item => remove(item))
        document.querySelectorAll('input').forEach(input => display(input))
        document.querySelectorAll('textarea').forEach(input => display(input))
        //popup
        document.querySelector('.popup').addEventListener('click', function (e) {
            if (e.target.classList[0] !== 'popup-content') {
                this.style.display = 'none'
            }
        })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        document.querySelector('.popup').style.display = 'block'
    }


    return (
        <div className='contact'>
            <h2>Contact Us</h2>

            <div>
                <p>you can send us a message in our social media accounts</p>
                <div className='social'>
                    <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><FaFacebook /><span>Facebook</span></a>
                    <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><FaInstagram /><span>Instagram</span></a>
                    <a href='https://www.twitter.com' target='_blank' rel="noreferrer"><FaTwitter /><span>Twitter</span></a>
                    <a href='https://www.skype.com' target='_blank' rel="noreferrer"><FaSkype /><span>Skype</span></a>
                </div>
            </div>
            <div className="email">
                <p>or send us an email to :</p>
                <p>Mohcinedev@gmail.com</p>
            </div>
            <div className="form">

                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className='row'>
                        <input type="text" placeholder="First Name" aria-label="First Name" maxLength="20" />
                        <input type="text" placeholder="Last Name" aria-label="Last Name" maxLength="20" />
                    </div>
                    <input type="text" placeholder="Subject" aria-label="Subject" maxLength="60" />
                    <textarea cols="30" placeholder="Your Message!" aria-label="Your Message!" rows="10" ></textarea>
                    <input type="submit" title="still not working" value="Send" />
                </form>
            </div>
            <div className="popup">
                <div className="popup-content">
                    <p>Thanks for your Message <br /> but this btn still not working</p>
                    <NavLink to="/contact">
                        <svg style={{ fill: 'var(--dark)' }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" ></path></svg>
                    Back to site</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contact
