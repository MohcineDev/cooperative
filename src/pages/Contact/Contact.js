import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { A, ContactDiv, Container, Email, Form, Github, H2, Input, Instagram, Row, Skype, Social, Span, Twitter, Textarea, Submit, Popup, PopupContent } from './style'

function Contact() {

    // remove input / textarea placeholder
    const remove = input => input.target.placeholder = ''

    // display input / textarea placeholder
    const display = (input) => {
        input.target.placeholder = input.target.attributes["aria-label"].value
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // document.querySelectorAll('input:not([type=submit]), textarea').forEach(item => remove(item))
        // document.querySelectorAll('input:not([type=submit]), textarea').forEach(input => display(input))
    }, [])

    //confirmation popup
    const hidePopup = (e) => {
        if (e.target.classList.contains('popup')) {
            e.target.style.display = 'none'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        document.querySelector('.popup').style.display = 'block'
    }

    return (
        <ContactDiv>
            <H2>Contact Us</H2>
            <Container>
                <p>you can send us a message in our social media accounts</p>
                <Social>
                    <A href='https://github.com/mohcinedev' target='_blank' rel="noreferrer">
                        <Github/>
                        <Span>Github</Span>
                    </A>
                    <A href='https://www.instagram.com' target='_blank' rel="noreferrer">
                        <Instagram/>
                        <Span>Instagram</Span>
                    </A>
                    <A href='https://twitter.com/MohcineDev' target='_blank' rel="noreferrer">
                        <Twitter/>
                        <Span>Twitter</Span>
                    </A>
                    <A href='https://www.skype.com' target='_blank' rel="noreferrer">
                        <Skype/>
                        <Span>Skype</Span>
                    </A>
                </Social>
            </Container>
            <Container>
                <p>or send us an email to :</p>
                <p>
                    <Email href="mailto:Mohcinedev@gmail.com">Mohcinedev@gmail.com</Email>
                </p>
            </Container>
            <Container>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                        <Input required onFocus={remove} onBlur={display} placeholder="Full Name" aria-label="First Name" />
                        <Input type="email" maxLength="30" required onFocus={remove} onBlur={display} placeholder="Email" aria-label="Last Name" />
                    </Row>
                    <Input type="text" maxLength="60" required onFocus={remove} onBlur={display} placeholder="Subject" aria-label="Subject" />
                    <Textarea cols="30" required placeholder="Your Message!" onFocus={remove} onBlur={display} aria-label="Your Message!" rows="10" ></Textarea>
                    <Submit type="submit" title="still not working" value="Send" />
                </Form>
            </Container>
            <Popup className="popup" onClick={hidePopup}>
                <PopupContent className="popup-content">
                    <p>Thanks for your Message <br /> but this btn still not working</p>
                    <Link to="/">
                        <svg style={{ fill: 'var(--dark)' }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" ></path></svg>
                    Back to site
                    </Link>
                </PopupContent>
            </Popup>
        </ContactDiv>
    )
}

export default Contact
