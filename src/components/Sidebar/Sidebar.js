import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TrainRounded, TramRounded } from '@material-ui/icons';
import { findAllByDisplayValue } from '@testing-library/react';

export default function Sidebar({setFeedVisible, setWatchVisible, setMarketVisible, setGroupsVisible, setProfileVisible, 
    setWidgetVisible, setSidebarVisible
}) {
    const setVisibility = (tab) => {
        if (tab === "profile") {
            setFeedVisible(false);
            setWatchVisible(false);
            setMarketVisible(false);
            setGroupsVisible(false);
            setProfileVisible(true);
            setWidgetVisible(false);
            setSidebarVisible(false);

    }
}
    return (
        <div  className = "sidebar">
       <div onClick = {() => setVisibility("profile")}><SidebarRow  src= "https://171rental.com/images/stu.png" title = 'Arpana'/></div> 
        <SidebarRow Icon = {LocalHospitalIcon} title = "COVID-19 Information Center"/>
            <SidebarRow Icon = {EmojiFlagsIcon} title = 'Pages'/>
            <SidebarRow Icon = {PeopleIcon} title = 'Friends'/>
            <SidebarRow Icon = {ChatIcon} title = 'Messenger'/>
            <SidebarRow Icon = {StorefrontIcon} title = 'Marketplace'/>
            <SidebarRow Icon = {VideoLibraryIcon} title = 'Videos'/>
            <SidebarRow Icon = {ExpandMoreIcon} title = 'Marketplace'/>
        </div>
    )
    }