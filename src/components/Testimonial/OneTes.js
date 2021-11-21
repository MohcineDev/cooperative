import React from 'react'
import {Card, Info, Img, Content} from './oneTesStyle'

function One_Tes({id,divId,img,name,tagname,testimonial}) {
    return (
        <Card id={divId}>
            <Info className="top">
                <Img src={img} alt="profile avatar" />
                <div className="name">
                    <h4>{name}</h4>
                    <h5>{tagname}</h5>
                </div>
            </Info>
            <Content>{testimonial}</Content>

        </Card>
    )
}

export default One_Tes
