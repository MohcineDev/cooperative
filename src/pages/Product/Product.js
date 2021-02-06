import React, { useEffect } from 'react'
import './product.css'
import data from '../Shop/data.json'

function Product(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let id   = props.match.params.id
    let a  = data.filter((aa) => aa.id === id)


    //#region 
    let i = 1
    function goLeft(e) {
        i--
        move(e.target.parentElement.children[0], e.target)
        console.log(e.target.parentElement.children[0]);
        e.target.disabled = true
    }

    function goRight(e) {
        i++
        move(e.target.parentElement.children[0], e.target)
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
        <div className="product-container">
            <div className="container">
                <div className="wrapper">
                    <img src={ '../../' +a[0].img} id="f" alt="" />
                    <img src={ '../../' +a[0].img} alt="" />
                    <img src={ '../../' +a[0].img} alt="" />
                    <img src={ '../../' +a[0].img} alt="" />
                    <img src={ '../../' +a[0].img} id="l" alt="" />
                </div>
                <button onClick={goLeft}></button>
                <button onClick={goRight}></button>
            </div>
            <div className="description">
                <h1>{a[0].name}</h1>
                <p>$20.00 USD</p>
                <p>{a[0].desc}</p>
                <div className="style">
                    <p>style</p>
                    <p>Premium Unisex Tee</p>
                </div>
                <div className="colors">
                    <p>COLOR</p>
                    <div className="colors_availabel">
                        <div className="brown"></div>
                        <div className="lightBlue"></div>
                        <div className="darkBlue"></div>
                        <div className="red"></div>
                        <div className="green"></div>
                    </div>
                </div>
                <div className="sizes">
                    <p>AVAILABLE SIZES</p>
                    <div className="availaableSizes">
                        <p>xs</p>
                        <p>s</p>
                        <p>m</p>
                        <p>l</p>
                        <p>xl</p>
                        <p>2xl</p>
                        <p>Size and fabric info <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit molestias facilis corporis inventore laborum ullam ipsum iusto?</span></p>
                    </div>
                </div>
                <button className='buy'>i would buy this!</button>
                <p><span>72 people </span>are interested in this shirt.</p>
                <p>This campaign ended on October 7th,2020. Hit "I would buy this" to be notified the next time it's
                    availaable.</p>
                <div className="discFooter">
                    <div>
                        <p>270</p><span>sold</span>
                    </div>
                    <div>
                        <p>0</p> <span>days</span>
                    </div>
                    <div>
                        <p>0</p> <span>hours</span>
                    </div>
                    <div>
                        <p>0</p> <span>mins</span>
                    </div>
                    <div>
                        <p>0</p> <span>secs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
