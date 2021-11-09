import React from 'react'
import { Link } from 'react-router-dom'
import "./blog.css"

function Blog({ id, title, short, date }) {
    const blogDate = new Date(date)

    return (
        <Link to={`blog/${id}`}>
            <div>
                <h2>{title}</h2>
                <p>{short}</p>
                <div>
                    <p>{blogDate.toDateString()}</p>
                </div>
            </div>
        </Link>
    )
}

export default Blog