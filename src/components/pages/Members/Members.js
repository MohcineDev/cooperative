import React from 'react'
import './members.css'
import member from './data.json'

function Members() {

    window.scrollTo(0, 0)


    return (
        <div className='members'>
            <h2>Our Cooperative Members / team</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius officia ipsam esse soluta consequatur eum voluptatibus. Minus necessitatibus qui quod voluptatibus quia atque quaerat delectus at magnam, illum rerum odit.
            </p>
            <div className='container'>
                <div className="row">
                    <div className="member">
                        <img src={'./imgs/' + member[0].img} alt="member 1" />
                        <p>{member[0].name}</p>
                        <div className="social">
                            {
                                member[0].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[0].desc}
                        </p>
                    </div>
                    <div className="member">
                        <img src={'./imgs/' + member[1].img} alt="member 1" />
                        <p>{member[1].name}</p>
                        <div className="social">
                            {
                                member[1].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[1].desc}
                        </p>
                    </div>
                    <div className="member">
                        <img src={'./imgs/' + member[2].img} alt="member 1" />
                        <p>{member[2].name}</p>
                        <div className="social">
                            {
                                member[2].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[2].desc}
                        </p>
                    </div>
                    <div className="member">
                        <img src={'./imgs/' + member[3].img} alt="member 1" />
                        <p>{member[3].name}</p>
                        <div className="social">
                            {
                                member[3].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[3].desc}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="member">
                        <img src={'./imgs/' + member[4].img} alt="member 1" />
                        <p>{member[4].name}</p>
                        <div className="social">
                            {
                                member[4].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[4].desc}
                        </p>
                    </div>
                    <div className="member">
                        <img src={'./imgs/' + member[5].img} alt="member 1" />
                        <p>{member[5].name}</p>
                        <div className="social">
                            {
                                member[5].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[5].desc}
                        </p>
                    </div>
                    <div className="member">
                        <img src={'./imgs/' + member[6].img} alt="member 1" />
                        <p>{member[6].name}</p>
                        <div className="social">
                            {
                                member[6].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[6].desc}
                        </p>
                    </div>
                    <div className="member">
                        <img src={'./imgs/' + member[7].img} alt="member 1" />
                        <p>{member[7].name}</p>
                        <div className="social">
                            {
                                member[7].social.map((item, i) => <a key={i} href={item.link} target="_blanc"> <img  src={'./imgs/' + item.icon} alt="" /></a>)
                            }
                        </div>
                        <p className='desc'>
                            {member[7].desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members
