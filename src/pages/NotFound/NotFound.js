import React from 'react'
import './notFound.css'
function NotFound(props) {
    return (
        <div className="NotFound">
            <h1>404</h1>
            <h2>Not Found!! {props.location.pathname}</h2>
        </div>
    )
}

export default NotFound
