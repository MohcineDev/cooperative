import styled from 'styled-components'
import {Link} from 'react-router-dom'

const FooterDiv = styled.div`
    background-color: var(--dark);
    color: #ffd;
    padding: 1.5rem;
    clip-path: polygon(0 5%, 48% 5%, 50% 0, 52% 5%, 100% 5%, 100% 100%, 0 100%);
    overflow: visible;
    margin-top: 5rem;
    box-shadow: 0 -4px 10px #3d7ba5 inset;
`

const Links = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin: 1.5rem auto;
`

const Title = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: #afc7ff;
`
const A = styled(Link)`
    margin: 1rem 0;
    line-height: 1.5rem;
    transition: color 0.3s;
`
const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 0 2rem;
`

const Email = styled.a`
    color: #ffd;
    transition: color 0.3s;
    border-bottom: 1px solid #264463;
`

const Svg = styled.svg`
    width: 30px;
    margin: 0 10px;
`

export{
    FooterDiv,
    Links,
    Title,
    A,
    Copyright,
    Email,
    Svg
}