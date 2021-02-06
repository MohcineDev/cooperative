import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'    

function Gallery(props) {
    return (
        <div className="gallery" id="gallery">
            <h2>A Gallery of our work</h2>
            <div className="gallery-img">
                <div id="first">
                    <img src="imgs/sand.webp" alt="" />
                    <Link to="/details/1">
                        <button>Read More</button>
                    </Link>
                </div>
                <div id="second">
                    <img src="imgs/lights.webp" alt="" />
                    <Link to="/details/2">
                        <button>Read More</button>
                    </Link>
                </div>
                <div id="third">
                    <img src="imgs/terre.webp" alt="" />
                    <Link to="/details/3">
                        <button>Read More</button>
                    </Link>
                </div>
                <div id="fourth">
                    <img src="imgs/forest.webp" alt="" />
                    <Link to="/details/4">
                        <button>Read More</button>
                    </Link>
                </div>
                <div id="fifth">
                    <img src="imgs/trad.webp" alt="" />
                    <Link to="/details/5">
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Gallery
