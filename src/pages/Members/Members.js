import React, { useEffect } from 'react'
import './members.css'
import data from './data.json'
import Member from '../../components/Member/Member'

function Members() {
    useEffect(() => {
        document.title = `CooperativeN | Members`
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='members'>
            <h1>Our Cooperative Members / team</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia ipsam esse soluta consequatur eum voluptatibus. Minus necessitatibus qui quod voluptatibus quia atque quaerat delectus at magnam, illum rerum odit.
            </p>
            <div className='container'>
                <div className="wrapper">
                    {
                        data.members.map((member, index) =>
                            <Member key={index}
                                img={member.img}
                                name={member.name}
                                social={member.social}
                                desc={member.desc}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Members
