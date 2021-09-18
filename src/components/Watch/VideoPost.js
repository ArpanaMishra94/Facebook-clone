import React from 'react';
import './VideoPost.css';
import { Avatar } from '@material-ui/core';

export default function VideoPost({ profilePic, username, timestamp, message, video }) {
    return (
        <div className="videoPost">
            <div className="videoPost__top">
                <Avatar src={profilePic} className="videoPost__avatar" />
                <div className="videoPost__topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="videoPost__bottom">
                <p>{message}</p>
            </div>
        </div>
    )
}