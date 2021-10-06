import React from 'react'

import './Badge.scss'

const Badge = ( {color, onClick} ) => {
    return (
        <div>
            <i onClick={onClick} className={`badge badge--${color}`}></i>
        </div>
    )
}

export default Badge
