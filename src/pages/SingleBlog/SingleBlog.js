import React, { useEffect } from 'react'
import './singleBlog.css'
import data from '../Blogs/data.json'

function SingleBlog(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let elem = data.filter(blog => blog.id === parseInt(props.match.params.id))

    return (
        <div className="singleblog">
            <h2>{elem[0].title}</h2>
            <p>{elem[0].header}</p>
            <div className="imgs">
                {elem[0].imgs.map((item, index) => <img key={index} src={item} alt="blog" />)}
            </div>
            <p className="content">{elem[0].content}</p>
            <div>
                <span>Share On:</span>
                <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <title>instagram</title>
                        <circle style={{ fill: "#ccc" }} cx="25" cy="25" r="25" />
                        <rect style={{ strokeWidth: '3px', fill: 'none', stroke: '#fff', strokeMiterlimit: '10' }} x="9" y="9" width="32" height="32" rx="7.23" />
                        <circle cx="25" cy="25" r="5.75" style={{ strokeWidth: '3px', fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }} />
                        <circle cx="35.04" cy="14.96" r="1.96" style={{ fill: '#fff' }} />
                    </svg>
                </a>
                <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <title>facebook</title>
                        <circle style={{ fill: "#ccc" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                        <path style={{ fill: '#fff' }} d="M27.2,19.15V16.78a1.25,1.25,0,0,1,1.31-1.42h3.32V10.28l-4.57,0c-5.08,0-6.23,3.79-6.23,6.21v2.68H18.09v5.92h3V39.88H27V25.07h4.4l.21-2.33.33-3.59Z" />
                    </svg>
                </a>
                <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <title>twitter</title>
                        <path style={{ fill: "#ccc" }} d="M50,25A25,25,0,1,1,25,0,25,25,0,0,1,50,25Z" />
                        <path style={{ fill: "#fff" }} d="M39.81,17.37a12,12,0,0,1-3.49.94A6,6,0,0,0,39,15a12.15,12.15,0,0,1-3.86,1.46,6,6,0,0,0-10.35,5.45,17.32,17.32,0,0,1-12.52-6.25,5.84,5.84,0,0,0-.83,3,6,6,0,0,0,2.71,5,6.11,6.11,0,0,1-2.76-.75V23a5.78,5.78,0,0,0,.42,2.17,6.06,6.06,0,0,0,4.46,3.7,6.05,6.05,0,0,1-1.6.21,6.31,6.31,0,0,1-1.15-.11,6.06,6.06,0,0,0,5.68,4.15,12.29,12.29,0,0,1-7.55,2.57,11.64,11.64,0,0,1-1.45-.09,17.4,17.4,0,0,0,9.32,2.69A16.91,16.91,0,0,0,36.38,24.85a16.52,16.52,0,0,0,.41-3.61c0-.26,0-.51,0-.77A12.4,12.4,0,0,0,39.81,17.37Z" />
                    </svg>
                </a>

                <a href="https://wa.me/+21260000000?text=salam Hi" rel="noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <title>whatsapp</title>
                        <circle style={{ fill: "#ccc" }} cx="25" cy="25" r="25" transform="translate(-0.36 0.36) rotate(-0.82)" />
                        <path style={{ fill: '#fff' }} d="M39.8,23.19a14.54,14.54,0,0,0-29-.27c0,.21,0,.42,0,.63A14.2,14.2,0,0,0,12.82,31l-2.63,7.74,8-2.56A14.56,14.56,0,0,0,39.81,23.55C39.81,23.43,39.8,23.31,39.8,23.19ZM25.27,35.68a12.22,12.22,0,0,1-6.73-2l-4.69,1.5,1.52-4.51a12,12,0,0,1-2.32-7.11,11.17,11.17,0,0,1,.06-1.17,12.23,12.23,0,0,1,24.34.22c0,.32,0,.63,0,.95A12.19,12.19,0,0,1,25.27,35.68Z" />
                        <path style={{ fill: '#fff' }} d="M31.93,26.46c-.36-.18-2.11-1-2.44-1.15s-.56-.17-.8.18-.92,1.15-1.13,1.38-.42.27-.77.09a9.57,9.57,0,0,1-2.87-1.75,10.82,10.82,0,0,1-2-2.45c-.21-.35,0-.54.16-.72s.35-.41.53-.62l.13-.17a4,4,0,0,0,.23-.42.64.64,0,0,0,0-.62c-.09-.18-.8-1.92-1.1-2.62s-.59-.59-.8-.59-.45,0-.68,0a1.31,1.31,0,0,0-.95.44,3.93,3.93,0,0,0-1.25,2.95,4.36,4.36,0,0,0,.18,1.2A8.25,8.25,0,0,0,19.63,24c.18.23,2.47,3.92,6.09,5.33s3.62.95,4.28.89a3.62,3.62,0,0,0,2.4-1.68,2.93,2.93,0,0,0,.21-1.69C32.52,26.73,32.28,26.64,31.93,26.46Z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SingleBlog