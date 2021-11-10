import React, { useEffect, useState } from 'react'
import './singleBlog.css'
import Social from '../../components/Social.js'

function SingleBlog(props) {

    const [blog, setBlog] = useState({})

    const getBlog = async () => {
        const dataa = await fetch(`../data.json`)

        const res = await dataa.json()
        setBlog(...res.blogs.filter(item => item.id === parseInt(props.match.params.id)))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getBlog()
        document.title = `Cooperative | ${blog.title}`
    }, [])

    return (
        <div className="singleblog">    
            {
                blog.title ?
                    <>
                        <h1> {blog.title}</h1>
                        <p>{blog.header}</p>
                        <div className="imgs">
                            {
                                blog.imgs.map((item, index) =>
                                    <img key={index} loading="lazy" src={item} alt="blog" />
                                )
                            }
                        </div>
                        <p>{blog.content}</p>
                        <div className="share">
                            <span>Share On : </span>
                            <Social color1='#ccc' color2='#fff' />
                        </div>
                    </>
                    : <h1 className='err'>Nothing Found!!</h1>
            }
        </div>
    )
}

export default SingleBlog