import { Avatar, IconButton } from '@material-ui/core';
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, Subscriptions, SupervisedUserCircle } from '@material-ui/icons';
import React from 'react'
import "./Header.css";
import {useStateValue} from "./StateProvider";
function Header() {
    const [{user}, dispatch] = useStateValue();


    return (
        <div className="header">
            <div className="header-left">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwRckJ9kkGqRPCVMwDXJXmqadDVFmh7CSOg&usqp=CAU"/>
            </div>
            <div className="header-input">
                <Search/>
                <input placeholder="Search Facebook" type="text"/>
            </div>

            <div className="header-center"></div>
            <div className="header-option header-option-active">
                <Home fontSize="large"/>
            </div>

            <div className="header-option">
                <Flag fontSize="large"/>
            </div>

            <div className="header-option">
                <Subscriptions fontSize="large"/>
            </div>

            <div className="header-option">
                <SupervisedUserCircle fontSize="large"/>
            </div>

            <div className="header-right">
            <div className="header-info">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                    <Add/>
            </IconButton>
            <IconButton>
            <Forum/>
            </IconButton>
            <IconButton>
            <NotificationsActive/>
        </IconButton>
        <IconButton>
        <ExpandMore/>
        </IconButton>
   
            </div> 
        </div>
    )
}

export default Header
