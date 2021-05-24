import React from 'react'
import {Row, Img, Span} from './DetailsComStyle'

const DetailsCom = (props) => {
    return (
        <Row>
            <Img src={props.img} alt={props.alt} />
            <div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <Span>{props.date}</Span>
            </div>
        </Row>
    )
}

export default DetailsCom
