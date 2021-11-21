import styled from 'styled-components'

const  TestimonialSection = styled.section `
    max-width:1200px;
    margin: 0rem auto;
    padding: 2rem 10px;
`
const HeadingH2 =styled.h2 `
    font-size: var(--h2-size);
`
const Desc = styled.p `
    text-align: center;
`
const Container = styled.div`
    position: relative;
    padding: 20px 0;
    overflow: hidden;
    &::before, &:after{
        content: "";
        width: 150px;
        height: 100%;
        top: 0;
        position: absolute;
        z-index: 8;
    }
    &:before{
        left: 0;
        background: linear-gradient(90deg, #f9f9f9, transparent);
    }
    &:after{
        right: 0;
        background: linear-gradient(-90deg, #f9f9f9, transparent);
    }
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 300px);
    gap: 1rem 2rem;
    transform: translateX(-300px);
    transition: transform 0.7s;
`

const Button = styled.button`
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    padding: 1.2rem;
    border-radius: 5px;
    background: rgb(25, 25, 25);
    cursor: pointer;
    opacity: 0.3;
    transition: opacity 0.3s;
    border: 2px solid #ddd;
    font-size: 20px;

    &::after{
        content: "";
        border: 15px solid;
        box-sizing: border-box;
        border-color: white transparent transparent transparent;
        z-index: 10;
        width: 15px;
        height: 15px;
        position: absolute;
        top: 4px;
    }

    &:hover{
        opacity: 0.7;
    }
`

const PrevBtn = styled(Button)`
    left: 10px;

    &::after{
        transform: rotate(90deg);
        left: -5px;
    }
` 

const NextBtn = styled(Button)`
    right: 10px;

    &::after{
        transform: rotate(-90deg);
        right: -5px;
    }
` 
export {
    TestimonialSection,
    HeadingH2,
    Desc,
    Container,
    Wrapper,
    PrevBtn,
    NextBtn
}