import React from 'react'
import './hero.css'

function Hero() {

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
