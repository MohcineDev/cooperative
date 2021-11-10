import React, { useEffect } from 'react'
import './about.css'

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    document.title = 'Cooperative | About'

    return (
        <div className="about">
            <h1>About Our Cooperative</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente animi veniam neque quasi praesentium nam quo fuga ea doloremque impedit tenetur et delectus, inventore accusamus enim libero corporis? Animi!</p>
            <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 320">
                    <title>short video about our Cooperative</title>
                    <g id="src">
                        <rect x="3.04" y="3.32" width="498.93" height="313.35" rx="10" style={{ fill: "none", stroke: '#102030', strokeMiterlimit: '10', strokeWidth: '3px' }} />
                        <path d="M252.5,123a37,37,0,1,0,37,37A37,37,0,0,0,252.5,123Zm17.44,41.35-23.88,13.78a5,5,0,0,1-7.5-4.33V146.22a5,5,0,0,1,7.5-4.33l23.88,13.78A5,5,0,0,1,269.94,164.33Z" style={{ fill: "#102030", opacity: "0.9" }} /></g>
                </svg>
                <p className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias neque sunt consequatur nesciunt ex ipsum odio quia expedita necessitatibus. Labore, error! Molestiae, corrupti! Doloremque fuga obcaecati numquam repudiandae beatae quia?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, et? Numquam placeat aut illum cupiditate sapiente ipsam quae asperiores, exercitationem saepe odit magni quas molestias vero ullam voluptatibus facilis ab.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, et? Numquam placeat aut illum cupiditate sapiente ipsam quae asperiores, exercitationem saepe odit magni quas molestias vero ullam voluptatibus facilis ab.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti</li>
                    <li>Lorem ipsum dolor sit amet Corrupti</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis earum repudiandae? Aut, magnam eum nemo, recusandae eveniet nisi consectetur aliquam exercitationem, odio reiciendis voluptatum sit? Quo ullam temporibus labore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis earum repudiandae? Aut, magnam eum nemo, recusandae eveniet nisi consectetur aliquam exercitationem, odio reiciendis voluptatum sit? Quo ullam temporibus labore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis earum repudiandae? Aut, magnam eum nemo, recusandae eveniet nisi consectetur aliquam exercitationem, odio reiciendis voluptatum sit? Quo ullam temporibus labore? <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis earum repudiandae? Aut, magnam eum nemo, recusandae eveniet nisi consectetur aliquam exercitationem, odio reiciendis voluptatum sit? Quo ullam temporibus labore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis earum repudiandae? Aut, magnam eum nemo, recusandae eveniet nisi consectetur aliquam exercitationem, odio reiciendis voluptatum sit? Quo ullam temporibus labore?
                </p>
                <p className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias neque sunt consequatur nesciunt ex ipsum odio quia expedita necessitatibus. Labore, error! Molestiae, corrupti! Doloremque fuga obcaecati numquam repudiandae beatae quia?
                </p>
                <div >
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe cumque, sequi corrupti non ducimus vel fuga modi provident sapiente, at qui voluptate, adipisci hic explicabo repellat velit sit exercitationem?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe cumque, sequi corrupti non ducimus vel fuga modi provident sapiente, at qui voluptate, adipisci hic explicabo repellat velit sit exercitationem?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe cumque, sequi corrupti non ducimus vel fuga modi provident sapiente, at qui voluptate, adipisci hic explicabo repellat velit sit exercitationem?</p>
                    </div>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, et? Numquam placeat aut illum cupiditate sapiente ipsam quae asperiores, exercitationem saepe odit magni quas molestias vero ullam voluptatibus facilis ab.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti</li>
                    <li>Lorem ipsum dolor sit amet Corrupti</li>
                    <li>Lorem ipsum dolor sit amet Corrupti</li>
                    <li>Lorem ipsum dolor sit amet Corrupti</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                </ul>
            </div>
        </div>
    )
}

export default About
