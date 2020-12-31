import React from 'react'
import './hero.css'

function Hero() {

    const toBottom = () => { 
        window.scrollTo(
            {
                behavior:'smooth',
                top:window.innerHeight
            }
        )
    }
    return (
        <div className='container'>
            <div className="content">
                <h1>A Page Title here</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis repellat aut officia ut ipsa rem harum commodi itaque, corrupti eum est a voluptas maxime voluptate beatae eveniet magni sed?</p>
                <button>Explore</button>
                <div onClick={toBottom} className="scroll"></div>
            </div>
        </div>
    )
}

export default Hero
