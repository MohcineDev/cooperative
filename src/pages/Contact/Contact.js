import React, { useEffect } from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaSkype } from 'react-icons/fa'
import './contact.css'

function Contact() {
   
    
    function remove(a) {
        a.addEventListener('focus', function () {
            this.placeholder = ''
        })
    }
    function display(a) {
        a.addEventListener('blur', function () {
            this.placeholder = this.getAttribute('aria-label')
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.querySelectorAll('input').forEach(a => remove(a))
        document.querySelectorAll('textarea').forEach(a => remove(a))
        document.querySelectorAll('input').forEach(a => display(a))
        document.querySelectorAll('textarea').forEach(a => display(a))
    }, [])

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

                <form action="">
                    <div className='row'>
                        <input type="text" placeholder="First Name" aria-label="First Name" maxLength="20" />
                        <input type="text" placeholder="Last Name" aria-label="Last Name" maxLength="20" />
                    </div>
                    <input type="text" placeholder="Subject" aria-label="Subject" maxLength="60" />
                    <textarea cols="30" placeholder="Your Message!" aria-label="Your Message!" rows="10" ></textarea>
                    <input type="submit" title="still not working" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
