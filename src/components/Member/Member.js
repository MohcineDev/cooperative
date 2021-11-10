import React from 'react'
import './member.css'

function Member({ img, name, social, desc }) {
    return (
        <div className="member">
            <div className="content">
                <img src={img} alt="member profile" />
                <h3>{name}</h3>
                <p>speciality field</p>
                <p>
                    {desc}
                </p>
            </div>
            <div className="social">
                {
                    social.map((item, i) =>
                        <a key={i} href={item.link} rel="noreferrer" target="_blank">
                            <img src={item.icon} alt="social media link" />
                        </a>
                    )
                }
            </div>

        </div>
    )
}

export default Member
