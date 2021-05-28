import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaSkype, FaGithub } from 'react-icons/fa'

const ContactDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;

    
    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`
const H2 = styled.h2`
    text-align: left;

    @media only screen and (max-width: 500px) {
        text-align: center;
        font-size: 1.6rem;
    }
`

const Container = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 0 0 5px #aaa;
`

const Social = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 500px) {
        justify-content: center;
    }
`

const A = styled.a`
    display: flex;
    padding: 0.5rem;
    width: 120px;
    align-items: center;
    font-size: 1.5rem;
    background-color: var(--dark);
    cursor: pointer;
    margin: 1rem 1.2rem 0 0;
    border: 2px dashed #ddd;
    box-shadow: 0 0 0px 5px var(--dark);

    &:hover{
        border: 2px dashed #fff;
    }
`

const Span = styled.span`
    font-size: 1rem;
    color: #eee;
`
const SvgStyle = `
    display: inline-block;
    margin: 0 0.5rem;
    fill: #eee;
`
const Instagram = styled(FaInstagram)`
    ${SvgStyle}
`
const Twitter = styled(FaTwitter)`
    ${SvgStyle}
`
const Skype = styled(FaSkype)`
    ${SvgStyle}
`
const Github = styled(FaGithub)`
    ${SvgStyle}
`
const Email = styled.a`
    background-color: #ddd;
    border-left: 7px solid #ccc;
    padding: 7px;
    width: max-content;
`
const Form = styled.form`
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    text-align: center;

    
    @media only screen and (max-width: 768px) {
         width: 100%;
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 100%));
    width: 90%;
    gap: 1rem;
    margin: 0 auto;

    input{
        width: 100%;
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, minmax(0, 100%));
        gap: 0;
    }
    
`
const FormInput = `
    background-color: #fff;
    border: 1px solid var(--dark);
    padding: 0.5rem;
    box-sizing: border-box;
    margin: 0.5rem 0;
`

const Input = styled.input`
    ${FormInput}
    width: 90%;
`
const Textarea = styled.textarea`
    ${FormInput}
    resize: none;
    width: 90%;
`

const Submit = styled.input`
    ${FormInput}
    background-color: var(--dark);
    font-size: 1rem;
    color: #eee;
    cursor: pointer;
    width: 50%;
    transition: 0.3s;
    letter-spacing: 2px;
    border: 1px dashed #ddd;
    box-shadow: 0 0 0px 3px var(--dark);

    &:hover{
        background-color: #278ab0;
    }
`

const Popup = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: none;
    z-index: 3;
    
    a,p {
        color: var(--dark);
        font-weight: 600;
    }
`
const PopupContent = styled.div`
    padding: 2rem;
    border-radius: 10px;
    background-color: #ddd;
    width: 60%;
    margin: 0 auto;
    margin-top: 6rem;
    border: 3px dashed #000000e6;
    animation: drag 0.5s 1;

    p {
        margin-top: 0;
    }
`

export {
    ContactDiv,
    H2,
    Container,
    Social,
    A,
    Span,
    Instagram,
    Twitter,
    Skype,
    Github,
    Email,
    Form,
    Row,
    Input,
    Textarea,
    Submit,
    Popup,
    PopupContent
}