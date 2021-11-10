import React, { useEffect } from 'react'
import Product from '../../components/Product/Product'
import './shop.css'
import product from './data.json'

function Shop() {

    useEffect(() => {
        document.title = 'CooperativeN | Shop'
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="shop">
            <h1>Our Cooperative Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente animi veniam neque quasi praesentium nam quo fuga ea doloremque impedit tenetur et delectus, inventore accusamus enim libero corporis? Animi!</p>
            <div className="container">
                <h2>Category Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda perferendis! Quis aspernatur repellendus, dolore, vitae blanditiis dolorem quae placeat architecto totam ipsum repellat aliquam a magni expedita quos neque!</p>
                <div className="wrap">
                    {
                        product.category1.map((item, index) =>
                            <Product key={index}
                                desc={item.desc}
                                name={item.name}
                                img={item.img}
                                id={item.id} />
                        )
                    }
                </div>
                <h2>Another Category Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda perferendis! Quis aspernatur repellendus, dolore, vitae blanditiis dolorem quae placeat architecto totam ipsum repellat aliquam a magni expedita quos neque!</p>
                <div className="wrap">
                    {
                        product.category2.map((item, index) =>
                            <Product key={index}
                                desc={item.desc}
                                name={item.name}
                                img={item.img}
                                id={item.id} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop
