import React, {  useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";



function Header() {

    const [inputSearch,setInputSearch] = useState("");

    return (
        <div className="header">
            {/* Hello */}
            <div className="header__left">
            <MenuIcon/>
            <Link to={"/"}>
            <img className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"/>
            </Link>
            </div>

            <div className="header__input">
            <input 
            onChange={e=>setInputSearch(e.target.value)}
            value={inputSearch}
            type="text"/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
            </Link>
            </div>

            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
                alt="Meet"
                src="https://media-exp1.licdn.com/dms/image/C5103AQE-WLht3Jy14w/profile-displayphoto-shrink_200_200/0/1579801466114?e=1623283200&v=beta&t=Y5XacO1NxxfOWopDK6zO1AcRmYhv18MEuqnmUTck4-U"
                
            />
            </div>
        </div>
    )
}

export default Header
