import styled from 'styled-components'

export const DetailsSec = styled.section`
width: 80%;
margin: 0 auto;
`

export const H1 = styled.h1`
text-align: center;
text-transform: capitalize;
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0px, 50%));
gap: 2rem;
padding: 2rem 0;
align-items: center;

${props => props.last ? null : " border-bottom: 2px dashed #ddd"}

`
export const Img = styled.img`
     width: 100%;
     `