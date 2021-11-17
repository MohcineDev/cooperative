import React, { useEffect, useState } from 'react'
import './singleBlog.css'
import Social from '../../components/Social.js'

function SingleBlog(props) {

    const [blog, setBlog] = useState({})
 
    useEffect(() => {
        //include the function here to avoid the useEffect dependencies warnings
        async function getBlog() {

            const dataa = await fetch(`../blogsData.json`)
            const res = await dataa.json()
            setBlog(...res.blogs.filter(item => item.id === parseInt(props.match.params.id)))
        }
        getBlog()
        window.scrollTo(0, 0)
        document.title = `Cooperative | ${blog.title}`
        
    }, [props.match.params.id, blog.title])

    return (
        <div className="singleblog">
            {
                //if there is a title there is a blog
                blog.title?
                    <>
                        <h1>{blog.title}</h1>
                        <p>{blog.header}</p>
                        <div className="imgs">
                            {
                                blog.imgs.map((item, index) =>
                                    <img key={index} src={item} alt="blog" />
                                )
                            }
                        </div>
                        <p>{blog.content}</p>
                        <div className="share">
                            <span>Share On : </span>
                            <Social color1='#ccc' color2='#fff' />
                        </div>
                    </>
                    : <h1 className='err'>Sorry, Nothing Found!!</h1>
            }
        </div>
    )
}

export default SingleBlog