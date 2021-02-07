import React from 'react'

function Member({img, name, social, desc}) {
    return (
        <div className="member">
        <img src={ img} alt="member 1" />
        <p>{name}</p>
        <p>speciality field</p>
        <div className="social">
            {
                social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img src={ item.icon} alt="social link" /></a>)
            }
        </div>
        <p className='desc'>
            {desc}
        </p>
    </div>
    )
}

export default Member
