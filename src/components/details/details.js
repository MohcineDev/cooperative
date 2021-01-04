import React from 'react'
import './g_details.css'
import data from './data.json'

function Details(props) {

    window.scrollTo(0, 0)

    let key = parseInt(props.match.params.id)
    let list = data.find(item => item.id === key)

    return (
        <div className="details">
            <h1>{list.title}</h1>
            <div className="d-container">
                <div className="d-row">
                    {/* put images inthe public folder */}
                    <div className="img">
                        <img src={'../imgs/' + list.img1} alt="" />
                    </div>

                    <div>
                        <h2>Sub title here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum asperiores ullam quidem unde consequatur culpa eius dicta itaque hic totam impedit nostrum eligendi, minus veniam dolorum! Dignissimos, corrupti impedit!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, aliquam sint. Et sed reprehenderit voluptatem dicta culpa expedita fuga laborum minima sit, corporis dolores ut dolor, necessitatibus ipsa alias quibusdam.
                            </p>
                    </div>
                </div>
                <div className="d-row">
                    <div>
                        <h2>Sub title here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum asperiores ullam quidem unde consequatur culpa eius dicta itaque hic totam impedit nostrum eligendi, minus veniam dolorum! Dignissimos, corrupti impedit!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, aliquam sint. Et sed reprehenderit voluptatem dicta culpa expedita fuga laborum minima sit, corporis dolores ut dolor, necessitatibus ipsa alias quibusdam.
                            </p>
                    </div>
                    <img src={'../imgs/' + list.img2} alt="" />
                </div>
            </div>
            <div className="d-row">
                <img src={'../imgs/' + list.img3} alt="" />
                <div>
                    <h2>Sub title here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum asperiores ullam quidem unde consequatur culpa eius dicta itaque hic totam impedit nostrum eligendi, minus veniam dolorum! Dignissimos, corrupti impedit!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, aliquam sint. Et sed reprehenderit voluptatem dicta culpa expedita fuga laborum minima sit, corporis dolores ut dolor, necessitatibus ipsa alias quibusdam.
                            </p>
                </div>
            </div>
        </div>
    )
}

export default Details
