import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

function Product(props) {
    return (
        <div className="product">
            <img src={"../../imgs/" + props.img} alt="" />
            <p>{props.desc}</p>
            <Link to="#" >
                <button>More</button>
            </Link>
        </div>
    )
}

export default Product
