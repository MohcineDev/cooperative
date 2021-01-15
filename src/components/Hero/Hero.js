import React from 'react'
import './hero.css'
import lights from '../../imgs/lights.jpg'
import sand from '../../imgs/sand.jpg'
import trad from '../../imgs/trad.jpg'

function Hero() {

    let i = 1
    const goLeft = (event) => {
        i--
        event.target.disabled = true
        move(event.target.previousSibling, event.target)
    }

    const goRight = (event) => {
        i++
        event.target.disabled = true
        move(event.target.parentElement.children[0], event.target)
    }

    const move = (wrap, btn) => {
        wrap.style.transition = 'transform 0.5s ease-in-out'
        wrap.style.transform = `translateX(${i * -100}%)`
        reset(wrap, btn)
    }

    const reset = (wrap, btn) => {
        wrap.ontransitionend = () => {
            if (wrap.children[i].id === 'f') {
                wrap.style.transition = 'transform 0s'
                i = wrap.children.length - 2
                wrap.style.transform = `translateX(${i * -100}%)`
            }
            else if (wrap.children[i].id === 'l') {
                wrap.style.transition = 'transform 0s'
                i = 1
                wrap.style.transform = `translateX(${i * -100}%)`
            }
            btn.disabled = false

        }

    }
    const toBottom = () => {
        window.scrollTo(
            {
                behavior: 'smooth',
                top: window.innerHeight
            }
        )
    }
    return (
        <div className="hero">
            <div className='container'>
                <div className="wrapper">
                    <img src={lights} id='f' alt="" />
                    <img src={trad} alt="" />
                    <img src={sand} alt="" />
                    <img src={lights} alt="" />
                    <img src={trad} id='l' alt="" />
                </div>

                <button onClick={goLeft} id="prev"></button>
                <button onClick={goRight} id="next"></button>

                <div className="content">
                    <h1>A Cooperative Title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis repellat aut officia ut ipsa rem harum commodi itaque, corrupti eum est a voluptas maxime voluptate beatae eveniet magni sed?</p>
                    <a href='#categories'><button>Explore</button></a>
                    <div onClick={toBottom} className="scroll"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
