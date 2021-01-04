import React from 'react'
import './process.css'
import cart from '../../imgs/cart.svg'
import del from '../../imgs/del.svg'
import setting from '../../imgs/setting.svg'
import arrows from '../../imgs/arrows.svg'

function Process() {
    return (
        <div className="process">
            <h2>Our Work Process</h2>
            <div className="process-wrap">
                <div>
                    <img src={cart} alt="" />
                    <div>
                        <h3>1 Title here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ad quisquam? Corrupti magnam tempore maxime debitis reprehenderit delectus. Adipisci ipsum, natus praesentium sint a unde obcaecati deleniti? Necessitatibus, deserunt rem.</p>
                    </div>
                </div>
                <div>
                    <img src={del} alt="" />
                    <div>
                        <h3>2 Title here</h3>
                        <p> dipisicing elit. Animi, ad quisquam? Corrupti magnam tempore maxime debitis reprehenderit delectus. Adipisci ipsum, natus praesentium sint a unde obcaecati deleniti? Necessitatibus, deserunt rem.</p>
                    </div>
                </div>
                <div>
                    <img src={arrows} alt="" />
                    <div>
                        <h3>Something here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ad quisquam? Corrupti magnam tempore maxime debitis reprehenderit delectus..</p>
                    </div>
                </div>
                <div>
                    <img src={setting} alt="" />
                    <div>
                        <h3>Title here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ad quisquam? Corrupti magnam tempore maxime debitis reprehenderit delectus. Adipisci ipsum, natus praesentium sint a unde obcaecati deleniti? Necessitatibus, deserunt rem.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
