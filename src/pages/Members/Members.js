import React, { useEffect } from 'react'
import './members.css'
import member from './data.json'
import Member from '../../components/Member/Member'

function Members() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='members'>
            <h2>Our Cooperative Members / team</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia ipsam esse soluta consequatur eum voluptatibus. Minus necessitatibus qui quod voluptatibus quia atque quaerat delectus at magnam, illum rerum odit.
            </p>
            <div className='container'>
                <div className="row">
                    <Member img={member[0].img} name={member[0].name} social={member[0].social} desc={member[0].desc} />
                    <Member img={member[1].img} name={member[1].name} social={member[1].social} desc={member[1].desc} />
                    <Member img={member[2].img} name={member[2].name} social={member[2].social} desc={member[2].desc} />
                    <Member img={member[3].img} name={member[3].name} social={member[3].social} desc={member[3].desc} />
                </div>
                <div className="row">
                    <Member img={member[4].img} name={member[4].name} social={member[4].social} desc={member[4].desc} />
                    <Member img={member[5].img} name={member[5].name} social={member[5].social} desc={member[5].desc} />
                    <Member img={member[6].img} name={member[6].name} social={member[6].social} desc={member[6].desc} />
                    <Member img={member[7].img} name={member[7].name} social={member[7].social} desc={member[7].desc} />

                </div>   <div className="row">
                    <Member img={member[2].img} name={member[2].name} social={member[2].social} desc={member[2].desc} />
                    <Member img={member[3].img} name={member[3].name} social={member[3].social} desc={member[3].desc} />
                     
                </div>
            </div>
        </div>
    )
}

export default Members
