import React, { useEffect } from 'react'
import data from './data.json'
import { DetailsSec, H1 } from './styled.js'
import DetailsCom from '../../components/DetailsCom/DetailsCom.js'

function Details(props) {

    // gallery page details
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // get gallery post id
    const key = parseInt(props.match.params.id)
    let list = data.find(item => item.id === key)

    return (
        <DetailsSec>
            <H1>{list.title}</H1>
            <div>
                {
                    list.row.map((elem, index) => <DetailsCom key={index} img={elem.img}
                        title={elem.title}
                        date={elem.date}
                        desc={elem.desc} />
                    )
                }

            </div>
        </DetailsSec>
    )
}

export default Details
