import styled from 'styled-components'

export const DetailsSec = styled.section`
    width: 80%;
    margin: 0 auto;

    div div:nth-of-type(2) img{
        grid-area:1/2/2/3;
    }
    div div:not(div:last-child){
        border-bottom: 2px dashed #ddd
    }

    
    @media screen and (max-width: 992px) {
        width: 95%;
    }
    @media screen and (max-width: 768px) {
        width: 80%;

        div div:nth-of-type(2) img{
            grid-area:1/1/2/2;
        }

    }

    @media only screen and (max-width: 600px) {
        width: 95%;
        h2{
            font-size:1.5rem;
        }
        p{
            margin:1rem;
            font-size:14px;
            line-height: 1.2;
        }
    }
        
`

export const H1 = styled.h1`
    text-align: center;
    text-transform: capitalize;
`
