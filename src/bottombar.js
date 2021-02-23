import React from 'react'
import './bottombar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
function Bottombar() {
    return (
        <div id='bottombar'>
            <span className='selected p-4 hover:bg-gray-300 bt-item'><HomeIcon className="selected icon" /> <p className="">Home</p></span>
            <span className='p-4 hover:bg-gray-300 bt-item'><WhatshotIcon className="icon"/><p className="-ml-2">Trending</p> </span>
            <span className='p-4 hover:bg-gray-300 bt-item'><SubscriptionsIcon className="icon"/><p className="-ml-3">Subscription</p></span>
            <span className='p-4 hover:bg-gray-300 bt-item'><VideoLibraryIcon className="icon"/><p className="-ml-1 mt-1">Library</p></span>
        </div>
    )
}

export default Bottombar
