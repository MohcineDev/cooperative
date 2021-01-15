import React from 'react'

function NotFound(props) {
    return (
        <div>
            <h1>404</h1>
            <h2>Not Found!! {props.location.pathname}</h2>
        </div>
    )
}

export default NotFound
