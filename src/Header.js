import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useState} from "react";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import App from './App';
import Notification from './notifaction'
const Header = () => {
    const [inputSearch, setinputSearch] = useState("");
    function useToggle(initialValue = false) {
        const [value, setValue] = React.useState(initialValue);
        const toggle = React.useCallback(() => {
          setValue(v => !v);
        }, []);
        return [value, toggle];
      }
    const [show, setshow] = useToggle();
    const [shownotf, setshownotf] = useToggle();
    return (
        <div className="header w-full">
            <div id="left" className="">
                <button id='burger' onClick={setshow}><MenuIcon />
                {show ? 
                    <div class='menu-items overflow-y-auto'>
                        <div className='mitem'><HomeIcon  className='selectedicon micon'/><span className='selectedtext mtext'>Home</span></div>
                        <div className='mitem'><WhatshotIcon className='micon'/><span className='mtext'>Trending</span></div>
                        <div className='mitem'><SubscriptionsIcon className='micon'/><span className='mtext subs'>Subscription</span></div>
                        <hr/>
                        <div className='mitem'><HomeIcon className='micon'/><span className='mtext home'>Home</span></div>
                        <div className='mitem'><HomeIcon className='micon'/><span className='mtext home'>Home</span></div>
                        <div className='mitem'><HomeIcon className='micon'/><span className='mtext home'>Home</span></div>
                        <div className='mitem'><HomeIcon className='micon'/><span className='mtext home'>Home</span></div>
                        <div className='mitem'><HomeIcon className='micon'/><span className='mtext home'>Home</span></div>
                        <hr/>
                    </div>: null
                }
                </button>
                <Link to={App.js}><img className="logo h-item" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt='Youtube'></img></Link>
            </div>
            <div id="middle" className="">
            <input id="search-bar" onChange={(e) => setinputSearch(e.target.value)} value={inputSearch} className="placeholder-gray-600" type="text" placeholder="Search"></input>
            <div className="srch border border-gray-400 bg-gray-100 rounded-r" >
            <Link to={`/search/${inputSearch}`}><SearchIcon className="search-button"/></Link>
            <span className='tooltip-text rounded'>Search</span>
            </div>
            <div className='mic'>
            <MicIcon className="ml-3 icon"/>
            <span className='tooltip-text rounded'>Search with your voice</span>
            </div>
            </div>
            <div id="right" className="">
                <div className='videocall-icon'>
                <VideoCallIcon className="icon mr-6" />
                <span className='tooltip-text rounded'>Create</span>
                </div>
            <div className='apps-icon'><AppsIcon className="icon mr-6" />
            <span className='tooltip-text rounded'>YouTube apps</span>
            </div>
            <div className='notification-icon'>
                <button onClick={setshownotf}><NotificationsIcon className="icon mr-6" /></button>
                {shownotf ?
                    <div className='notf overflow-y-auto'>
                        <text className='notf-text'> Notifications </text>
                        <hr/>
                       <div className='notf-item'><Notification
                        icon='https://lh4.googleusercontent.com/-Q-dvKsbFGbo/AAAAAAAAAAI/AAAAAAAAAAA/jZKh3hzajAM/s96-c-mo/photo.jpg'
                        title='The Viral Fever uploaded:Shows'
                        time='22 hours ago'
                        image='https://i.ytimg.com/vi/yw_8FgN4bV4/hqdefault.jpg'
                        /></div>
                        <div className='notf-item'><Notification
                        icon='https://lh4.googleusercontent.com/-Q-dvKsbFGbo/AAAAAAAAAAI/AAAAAAAAAAA/jZKh3hzajAM/s96-c-mo/photo.jpg'
                        title='The Viral Fever uploaded:Shows'
                        time='22 hours ago'
                        image='https://i.ytimg.com/vi/yw_8FgN4bV4/hqdefault.jpg'
                        /></div>
                        <div className='notf-item'><Notification
                        icon='https://lh4.googleusercontent.com/-Q-dvKsbFGbo/AAAAAAAAAAI/AAAAAAAAAAA/jZKh3hzajAM/s96-c-mo/photo.jpg'
                        title='The Viral Fever uploaded:Shows'
                        time='22 hours ago'
                        image='https://i.ytimg.com/vi/yw_8FgN4bV4/hqdefault.jpg'
                        /></div>
                        <div className='notf-item'><Notification
                        icon='https://lh4.googleusercontent.com/-Q-dvKsbFGbo/AAAAAAAAAAI/AAAAAAAAAAA/jZKh3hzajAM/s96-c-mo/photo.jpg'
                        title='The Viral Fever uploaded:Shows'
                        time='22 hours ago'
                        image='https://i.ytimg.com/vi/yw_8FgN4bV4/hqdefault.jpg'
                        /></div>
                        <div className='notf-item'><Notification
                        icon='https://lh4.googleusercontent.com/-Q-dvKsbFGbo/AAAAAAAAAAI/AAAAAAAAAAA/jZKh3hzajAM/s96-c-mo/photo.jpg'
                        title='The Viral Fever uploaded:Shows'
                        time='22 hours ago'
                        image='https://i.ytimg.com/vi/yw_8FgN4bV4/hqdefault.jpg'
                        /></div>
                        <div className='notf-item'><Notification
                        icon='https://lh4.googleusercontent.com/-Q-dvKsbFGbo/AAAAAAAAAAI/AAAAAAAAAAA/jZKh3hzajAM/s96-c-mo/photo.jpg'
                        title='The Viral Fever uploaded:Shows'
                        time='22 hours ago'
                        image='https://i.ytimg.com/vi/yw_8FgN4bV4/hqdefault.jpg'
                        /></div>
                    </div>: null
                }
            <span className='tooltip-text rounded'>Notifications</span></div>
            <Avatar className="g-account mr-6 " src='https://media-exp1.licdn.com/dms/image/C5603AQEqkCdnbEtMvQ/profile-displayphoto-shrink_800_800/0/1605818561297?e=1619049600&v=beta&t=EsOtIjUY0WJISO_Aos3knpaRpKNHyUZDCS6TcSTbkWQ'/>
            </div>
        </div>
    )
}

export default Header