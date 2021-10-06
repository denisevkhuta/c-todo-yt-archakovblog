import React from 'react'

import './Badge.scss'

const Badge = ( {color, onClick, className} ) => {
    return (
        <div>
            <i onClick={onClick} className={`badge badge--${color} ${className}`}></i>
        </div>
    )
}

export default Badge
