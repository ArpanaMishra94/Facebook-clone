import React from 'react';
import './Header.css';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function Header({ setFeedVisible, setWatchVisible, setMarketVisible, setGroupsVisible, setWidgetVisible, setSidebarVisible, setProfileVisible }) {
  const [isFeedBlue, setFeedBlue] = useState(false);
  const [isWatchBlue, setWatchBlue] = useState(false);
  const [isMarketBlue, setMarketBlue] = useState(false);
  const [isGroupBlue, setGroupBlue] = useState(false);

  const feedBlue = () => {
    setFeedBlue(true);
    setWatchBlue(false);
    setMarketBlue(false);
    setGroupBlue(false);

  }
  const watchBlue = () => {
    setFeedBlue(false);
    setWatchBlue(true);
    setMarketBlue(false);
    setGroupBlue(false);

  }
  const marketBlue = () => {
    setFeedBlue(false);
    setWatchBlue(false);
    setMarketBlue(true);
    setGroupBlue(false);

  }
  const groupBlue = () => {
    setFeedBlue(false);
    setWatchBlue(false);
    setMarketBlue(false);
    setGroupBlue(true);

  }

  const setVisiblity = (tab) => {
    if (tab === "feed") {
      setFeedVisible(true);
      setWatchVisible(false);
      setMarketVisible(false);
      setGroupsVisible(false);
      setWidgetVisible(true);
      setSidebarVisible(true);
      setProfileVisible(false);
    } else if (tab === "watch") {
      setFeedVisible(false);
      setWatchVisible(true);
      setMarketVisible(false);
      setGroupsVisible(false);
      setWidgetVisible(true);
      setSidebarVisible(true);
      setProfileVisible(false);
    } else if (tab === "market") {
      setFeedVisible(false);
      setWatchVisible(false);
      setMarketVisible(true);
      setGroupsVisible(false);
      setWidgetVisible(true);
      setSidebarVisible(true);
      setProfileVisible(false);
    }
    else if (tab === "groups") {
      setFeedVisible(false);
      setWatchVisible(false);
      setMarketVisible(false);
      setGroupsVisible(true);
      setWidgetVisible(true);
      setSidebarVisible(true);
      setProfileVisible(false);
    }
  }

  return (
    <div className="header">

      <div className="header__left">
        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__middle">
        <div onClick={() => { setVisiblity("feed"); feedBlue() }}
          className="header__option"
          id={isFeedBlue ? "header__option--active" : ""}
        >
          <HomeIcon style={{ width: "2vw", height: "6vh" }} />
        </div>


        <div onClick={() => { setVisiblity("watch"); watchBlue() }}
          className="header__option"
          id={isWatchBlue ? "header__option--active" : ""}
        >
          <SubscriptionsIcon style={{ width: "2vw", height: "6vh" }} />
        </div>

        <div onClick={() => { setVisiblity("market"); marketBlue() }}
          className="header__option"
          id={isMarketBlue ? "header__option--active" : ""}
        >
          <StorefrontIcon style={{ width: "2vw", height: "6vh" }} />
        </div>

        <div onClick={() => { setVisiblity("groups"); groupBlue() }}
          className="header__option"
          id={isGroupBlue ? "header__option--active" : ""}
        >
          <SupervisedUserCircleIcon style={{ width: "2vw", height: "6vh" }} />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src = "http://clareville.co.uk/wp-content/uploads/2017/11/woman-on-laptop.jpg"/>
          <h4>Arpana</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}