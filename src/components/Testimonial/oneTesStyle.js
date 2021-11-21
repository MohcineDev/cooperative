import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    min-height: 200px;
    border: 1px dashed #ddd;
    background-color: #fff;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem 10px;
    box-sizing: border-box;
    h4{
        margin: 0;
    }
    h5{
        margin: 0;
        color:grey;
        font-weight:500;
    }
`
const Info = styled.div`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    border: 2px solid rgb(34, 154, 252);
    border-radius: 50%;
    width: 20%;
    margin-right: 5px;
`
const Content = styled.p`
    color: gray;
    line-height:1.2;
`

export {
    Card,
    Info,
    Img,
    Content
}