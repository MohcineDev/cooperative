import React from 'react'
import './categories.css'
import forest from '../../imgs/forest.jpg'
import lights from '../../imgs/lights.jpg'
import terre from '../../imgs/terre.jpg'

function Categories() {
    return (
        <div id="categories" className="cat-container">
             
            <h2>what are we doing here</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero, quos reiciendis corrupti quisquam sunt vel amet at iure, eaque, optio nobis!</p>
            <div className="categories">
                <div className="row">
                    <div>
                        <img src={forest} alt="forest" />
                        <h3>Something here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero</p>
                    </div>
                    <div>
                        <img src={lights} alt="light" />
                        <h3>Title here</h3>
                        <p>Sunt necessitatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero</p>
                    </div>
                    <div>
                        <img src={terre} alt="terre" />
                        <h3>The Title here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero</p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img src={forest} alt="forest" />
                        <h3>category here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero</p>
                    </div>
                    <div>
                        <img src={lights} alt="light" />
                        <h3>category title</h3>
                        <p> itatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero</p>
                    </div>
                    <div>
                        <img src={terre} alt="terre" />
                        <h3>category title here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus cumque laudantium dignissimos numquam accusantium perferendis delectus. Vero</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
