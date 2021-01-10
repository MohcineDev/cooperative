import React from 'react'
import Product from '../../components/Product/Product'
import './shop.css'
import product from './data.json'

function Shop() {
    window.scrollTo(0, 0)

    return (
        <div className="shop">
            <h1>Our Cooperative Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente animi veniam neque quasi praesentium nam quo fuga ea doloremque impedit tenetur et delectus, inventore accusamus enim libero corporis? Animi!</p>
            <div className="container">
                <h3>Category Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda perferendis! Quis aspernatur repellendus, dolore, vitae blanditiis dolorem quae placeat architecto totam ipsum repellat aliquam a magni expedita quos neque!</p>
                <div className="wrap">
                    <Product desc={product[0].desc} img={product[0].img} />
                    <Product desc={product[1].desc} img={product[1].img} />
                    <Product desc={product[2].desc} img={product[2].img} />
                    <Product desc={product[3].desc} img={product[3].img} />
                </div>
                <div className="wrap">
                    <Product desc={product[4].desc} img={product[4].img} />
                    <Product desc={product[5].desc} img={product[5].img} />
                    <Product desc={product[6].desc} img={product[6].img} />
                    <Product desc={product[7].desc} img={product[7].img} />
                </div>
                <h3>Another Category Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda perferendis! Quis aspernatur repellendus, dolore, vitae blanditiis dolorem quae placeat architecto totam ipsum repellat aliquam a magni expedita quos neque!</p>
                <div className="wrap">
                    <Product desc={product[8].desc} img={product[8].img} />
                    <Product desc={product[9].desc} img={product[9].img} />
                    <Product desc={product[10].desc} img={product[10].img} />
                    <Product desc={product[11].desc} img={product[11].img} />
                </div>
                <div className="wrap">
                    <Product desc={product[8].desc} img={product[8].img} />
                    <Product desc={product[9].desc} img={product[9].img} />
                </div>
            </div>
        </div>
    )
}

export default Shop
