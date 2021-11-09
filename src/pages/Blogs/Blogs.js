import React, { useEffect } from 'react'
import "./blogs.css"
import Blog from '../../components/Blog/Blog.js'
import data from './data.json'

function Blogs() {
    // scroll to top
    useEffect(() => {
        document.title = `CooperativeN | Blogs`


        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="blog">
            <h1>Blogs Section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente animi veniam neque quasi praesentium nam quo fuga ea doloremque impedit tenetur et delectus, inventore accusamus enim libero corporis? Animi!</p>

            <form action="">
                <select>
                    <option value="All">All</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Handemade">Handemade</option>
                    <option value="Something">Something</option>
                    <option value="Something else">Something else</option>
                    <option value="Something else">Something else else</option>
                </select>
            </form>
            {
                data.map(item =>  
                    <Blog
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        short={item.short_description}
                        date={item.date} />
                )
            }
 
        </div>
    )
}

export default Blogs
