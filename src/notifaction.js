import React from 'react'
import { Avatar } from '@material-ui/core';
import './notification.css'
function notifaction({icon, title,time,image}) {
    return (
        <div className='notfic'>
            <Avatar className='notfic-items notfic-icon' src={icon} alt={title}/>
            <div className='notfictext notfic-items'>
            <p className='notfictext-title'>{title}</p>
            <p className='notfictext-time'>{time}</p>
            </div>
            <img className="vid-image notfic-items" src={image} alt='0'/>
        </div>
    )
}

export default notifaction
