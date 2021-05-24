import styled from 'styled-components'

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 50%));
    gap: 2rem;
    padding: 2rem 0;
    align-items: center;
    justify-items: center;
    margin: 1rem 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2,minmax(100px,100%));
        
    }

`

const Img = styled.img`
    width: 100%;
    max-width:500px;
    border-radius:10px;
`
const Span = styled.span`
    color:#d5d2d2;
    text-align: right;
    display:block;
    margin-top:1.5rem;
`

export {
    Row, Img, Span
}