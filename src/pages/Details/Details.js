import React, { useEffect } from 'react'
import './g_details.css'
import data from './data.json'
import { DetailsSec, H1, Row, Img } from './styled.js'


function Details(props) {

    // gallery page details
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    const key = parseInt(props.match.params.id)
    let list = data.find(item => item.id === key)

    return (
        <DetailsSec>
            <H1>{list.title}</H1>
            <div>
                <Row>
                    <Img src={list.img1} alt="" />
                    <div>
                        <h2>Sub title here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum asperiores ullam quidem unde consequatur culpa eius dicta itaque hic totam impedit nostrum eligendi, minus veniam dolorum! Dignissimos, corrupti impedit!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, aliquam sint. Et sed reprehenderit voluptatem dicta culpa expedita fuga laborum minima sit, corporis dolores ut dolor, necessitatibus ipsa alias quibusdam.
                            </p>
                    </div>
                </Row>
                <Row>
                    <div>
                        <h2>Sub title here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum asperiores ullam quidem unde consequatur culpa eius dicta itaque hic totam impedit nostrum eligendi, minus veniam dolorum! Dignissimos, corrupti impedit!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, aliquam sint. Et sed reprehenderit voluptatem dicta culpa expedita fuga laborum minima sit, corporis dolores ut dolor, necessitatibus ipsa alias quibusdam.
                            </p>
                    </div>
                    <Img src={list.img2} alt="" />
                </Row>
                <Row last>
                    <Img src={list.img3} alt="" />
                    <div>
                        <h2>Sub title here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum asperiores ullam quidem unde consequatur culpa eius dicta itaque hic totam impedit nostrum eligendi, minus veniam dolorum! Dignissimos, corrupti impedit!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, aliquam sint. Et sed reprehenderit voluptatem dicta culpa expedita fuga laborum minima sit, corporis dolores ut dolor, necessitatibus ipsa alias quibusdam.
                            </p>
                    </div>
                </Row>
            </div>
        </DetailsSec>
    )
}

export default Details
