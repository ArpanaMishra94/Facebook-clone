import React from 'react';
import './GroupPost.css';
import {GroupData} from './GroupData';
import Post from '../Feed/Post';
import { Avatar } from '@material-ui/core';
export default function GroupPost({profilePic, username, timestamp, message, image, title}) {
    return(
        <div className = "groupPost">
        <div>

           {GroupData.map((val) => {
               return(
             <Post className = "post"
               profilePic = {val.profilePic}
               image = {val.image}
               message = {val.message}
               username = {val.username}
               timestamp = {val.timestamp}
              />
               )
           })}
        </div>


         {/* <div className="groupPost__top">
                <h2>{title}</h2>
                
                <div className="groupPost__topInfo">
                <Avatar src={profilePic} className="groupPost__avatar" />
                    <h3>{username}</h3>
                    <p>Ti mestamp...</p>
                </div>
            </div>
            <div className="groupPost__bottom">
                <p>{message}</p>
            </div> */}
        </div>
    )
}