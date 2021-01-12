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
                    <Product desc={product[0].desc} name={product[0].name} img={product[0].img} />
                    <Product desc={product[1].desc} name={product[1].name} img={product[1].img} />
                    <Product desc={product[2].desc} name={product[2].name} img={product[2].img} />
                    <Product desc={product[3].desc} name={product[3].name} img={product[3].img} />
                </div>
                <div className="wrap">
                    <Product desc={product[4].desc} name={product[4].name} img={product[4].img} />
                    <Product desc={product[5].desc} name={product[5].name} img={product[5].img} />
                    <Product desc={product[6].desc} name={product[6].name} img={product[6].img} />
                    <Product desc={product[7].desc} name={product[7].name} img={product[7].img} />
                </div>
                <h3>Another Category Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda perferendis! Quis aspernatur repellendus, dolore, vitae blanditiis dolorem quae placeat architecto totam ipsum repellat aliquam a magni expedita quos neque!</p>
                <div className="wrap">
                    <Product desc={product[8].desc} name={product[8].name} img={product[8].img} />
                    <Product desc={product[9].desc} name={product[9].name} img={product[9].img} />
                    <Product desc={product[10].desc} name={product[10].name} img={product[10].img} />
                    <Product desc={product[11].desc} name={product[11].name} img={product[11].img} />
                </div>
                <div className="wrap">
                    <Product desc={product[12].desc} name={product[12].name} img={product[12].img} />
                    <Product desc={product[13].desc} name={product[13].name} img={product[13].img} />
                </div>
            </div>
        </div>
    )
}

export default Shop
