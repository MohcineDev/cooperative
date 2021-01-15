import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'
import sand from '../../imgs/sand.jpg'
import lights from '../../imgs/lights.jpg'
import terre from '../../imgs/terre.jpg'
import forest from '../../imgs/forest.jpg'
import trad from '../../imgs/trad.jpg'

function Gallery() {
    return (
        <div className="gallery" id="gallery">
            <h2>A Gallery of our work</h2>
            <div className="gallery-img">
                <div id="first">
                    <img src={sand} alt="" />
                    <Link to="/details/1">
                        <button>More</button>
                    </Link>
                </div>
                <div id="second">
                    <img src={lights} alt="" />
                    <Link to="/details/2">
                        <button>More</button>
                    </Link>
                </div>
                <div id="third">
                    <img src={terre} alt="" />
                    <Link to="/details/3">
                        <button>More</button>
                    </Link>
                </div>
                <div id="fourth">
                    <img src={forest} alt="" />
                    <Link to="/details/4">
                        <button>More</button>
                    </Link>
                </div>
                <div id="fifth">
                    <img src={trad} alt="" />
                    <Link to="/details/5">
                        <button>More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Gallery
