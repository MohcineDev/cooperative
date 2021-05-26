import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Nav = styled.nav`
    background-color: var(--dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AandSpan = `
    padding: 1rem 0.5rem;
    color: azure;
    margin: 0 0.5rem;
    
    @media screen and (max-width: 760px) {
        padding: 0.7rem 2rem;
    }
`

const Logo = styled(Link)`
    ${AandSpan}
    margin-left: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.8rem;
`

const LinksWrap = styled.div`
    margin-right: 20vw;
    display: flex;
    
    @media screen and (max-width: 760px) {
        margin-right: 0;
        position: absolute;
        background-color: var(--dark);
        flex-direction: column;
        align-items: center;
        top: 3rem;
        right: 2rem;
        max-height: 0px;
        overflow: hidden;
        border-radius: 5px;
        transition: max-height 0.3s;
        z-index: 12;

        &.show {
            max-height: 200px;
            overflow: visible;
        }
    }
`

const Links = styled(NavLink)`
    ${AandSpan}
    position: relative;
    display: block;
    overflow: hidden;
    font-size: 18px;

    &:not(.active)::before {
        content: "";
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: -100%;
        border-bottom: 4px solid #1265be;
        transition: left 0.5s;
    }
    &:hover::before {
        left: 0%;
    }

    &.active {
        border-bottom: 4px solid #eee;
    }
`
const Socials = styled.div`
    position: relative;
    &:hover>div {
        max-height: 200px;
    }
    @media screen and (max-width: 760px) {
        display: none;
    }
`

const SocialLinks = styled.div`
    max-height: 0;
    transition: max-height 0.5s;
    position: absolute;
    z-index: 10;
    background-color: var(--dark);
    overflow: hidden;
    right: 3px;
    top: 50px;
`

const Span = styled.span`
    ${AandSpan}
    display: block;
`

const Account = styled.a`
    margin: 0;
    padding: 5px;
    display: block;
    position: relative;

    &:hover svg>circle:nth-of-type(1) {
        fill: #4a80c7 !important;
    }

    svg {
        width: 25px;
    }
`

const DisplayNavBtn = styled.svg`
    width: 25px;
    right: 15px;
    top: 10px;
    margin-right: 1rem;
    cursor: pointer;
    display: none;
    transition: transform 0.3s;

    @media screen and (max-width: 760px) {
        display: block;
    }
`

export {
    Nav,
    Logo,
    LinksWrap,
    Span,
    Links,
    Socials,
    SocialLinks,
    Account,
    DisplayNavBtn


}