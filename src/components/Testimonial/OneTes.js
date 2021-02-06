import React from 'react'

function One_Tes({id,divId,img,name,tagname,testimonial}) {
    return (
        <div id={divId}>
            <div className="top">
                <img src={img} alt="" />
                <div className="name">
                    <p>{name}</p>
                    <p>{tagname}</p>
                </div>
            </div>
            <p>{testimonial}</p>

        </div>
    )
}

export default One_Tes
