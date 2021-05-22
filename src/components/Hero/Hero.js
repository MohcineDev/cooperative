import React, { useEffect } from 'react'
import './hero.css'

function Hero() {

    // scroll to the second section
    const toBottom = () => {
        window.scrollTo(
            {
                behavior: 'smooth',
                top: window.innerHeight
            }
        )
    }
    
    useEffect(() => {
        let i = 1
        let slideInterval = setInterval(() => {
            if (window.location.pathname === "/") {
                if (i < 3) {
                    document.querySelector('.wrapper').style.transform = `translateX(${i * -100}% )`
                }
            }
            i++
            if (i > 3) {
                clearInterval(slideInterval)
            }
        }, 3500);
    }, [])

    return (
        <div className="hero">
            <div className='container'>
                <div className="wrapper">
                    <div className="first-bg"></div>
                    <div className="second-bg"></div>
                    <div className="third-bg"></div>
                </div>
                <div className="content">
                    <h1>The Cooperative Title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis repellat aut officia ut ipsa rem harum commodi itaque, corrupti eum est a voluptas maxime voluptate beatae eveniet magni sed?</p>
                    <a href='#categories'><button>Explore</button></a>
                    <div onClick={toBottom} className="scroll"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
