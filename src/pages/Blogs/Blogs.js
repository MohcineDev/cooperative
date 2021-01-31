import React, { useEffect } from 'react'
import "./blogs.css"
import Blog from '../../components/Blog/Blog.js'
import data from './data.json'

function Blogs() {
    useEffect(() => {
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

            <Blog id={data[0].id} title={data[0].title} short={data[0].short_description} date={data[0].date} />
            <Blog id={data[1].id} title={data[1].title} short={data[1].short_description} date={data[1].date} />
            <Blog id={data[2].id} title={data[2].title} short={data[2].short_description} date={data[2].date} />
            <Blog id={data[3].id} title={data[3].title} short={data[3].short_description} date={data[3].date} />
            <Blog id={data[4].id} title={data[4].title} short={data[4].short_description} date={data[4].date} />

        </div>
    )
}

export default Blogs
