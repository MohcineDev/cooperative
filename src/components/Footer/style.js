import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterDiv = styled.div`
    background-color: var(--dark);
    color: #ffd;
    padding: 1.5rem;
    clip-path: polygon(0 5%, 48% 5%, 50% 0, 52% 5%, 100% 5%, 100% 100%, 0 100%);
    overflow: visible;
    margin-top: 5rem;
    box-shadow: 0 -4px 10px #3d7ba5 inset;

    a, p{
        color:#eee;
    }

    @media only screen and (max-width: 768px) {
        padding: 0.8rem 0.5rem;
    }
    
    @media only screen and (max-width: 500px) {
        clip-path: none;

         p {
            font-size: 14px;
            margin: 8px 0;
        }
    }
`

const Links = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin: 1.5rem auto;
    @media only screen and (max-width: 768px) {
        width: 95%;
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);

        div:nth-child(1) {
            grid-area: 2/1/2/2;
        }
        div:nth-child(2) {
            grid-area: 1/1/2/3;
        }
        div:nth-child(3) {
            grid-area: 2/2/3/3;
        }
    }
`

const Title = styled.h3`
    font-weight: 600;
    color: #fff;

    @media only screen and (max-width: 500px) {
        font-size: 1rem !important;
    }
`
const A = styled(Link)`
    margin: 1rem 0;
    line-height: 1.5rem;
    transition: color 0.3s;
    display:block;
    text-transform:capitalize;
 
    &:hover{
        color: #fff;
    }
`
const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 0 2rem;

    a:hover svg>circle:nth-of-type(1) {
        fill: #eee !important;
    }
    @media only screen and (max-width: 768px) {       
        margin-top: 3rem;
        padding: 0 10px;
    }
    @media only screen and (max-width:500px) {       
        flex-direction: column-reverse;
    }
`

const Email = styled.a`
    color: #ffd;
    transition: color 0.3s;
    border-bottom: 1px solid #264463;

    &:hover{
        color:  #afc7ff;
    }  
      

`

const Svg = styled.svg`
    width: 30px;
    margin: 0 10px;
`

export {
    FooterDiv,
    Links,
    Title,
    A,
    Copyright,
    Email,
    Svg
}