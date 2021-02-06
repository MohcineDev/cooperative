import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

function Product(props) {
    //#region 
    let i = 1

    function goLeft(e) {
        i--
        move(e.target.parentElement.children[0].children[0], e.target)
        e.target.disabled = true
    }

    function goRight(e) {
        i++
        move(e.target.parentElement.children[0].children[0], e.target)
        e.target.disabled = true
    }

    function move(wrap, btn) {
        wrap.style.transition = 'transform 0.5s ease-out'
        wrap.style.transform = `translateX(${i * - 100}%)`
        adjust(wrap, btn)
    }

    function adjust(wrap, btn) {
        wrap.ontransitionend = () => {

            if (wrap.children[i].id === 'f') {
                wrap.style.transition = "none"
                i = wrap.children.length - 2
                wrap.style.transform = `translateX(${i * - 100}%)`
            } else if (wrap.children[i].id === 'l') {
                wrap.style.transition = 'none'
                i = 1
                wrap.style.transform = `translateX(${i * - 100}%)`
            }
            btn.disabled = false
        }
    }
    //#endregion

    return (
        <div className="product">
            <div className="container">
                <div className="wrapper">
                    <img src={props.img} id="f" alt="product img" />
                    <img src={props.img} alt="product img" />
                    <img src={props.img} alt="product img" />
                    <img src={props.img} alt="product img" />
                    <img src={props.img} id="l" alt="product img" />
                </div>
            </div>
            <button onClick={goLeft}></button>
            <button onClick={goRight}></button>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <Link to={"product/" + props.id}>
                <button>More</button>
            </Link>
        </div>
    )
}

export default Product
