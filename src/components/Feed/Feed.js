import React from 'react';
import './Feed.css';
import Story from './Story';
import {StoryReelData} from './StoryReelData';
import MessageSender from './MessageSender';
import Post from './Post';
import {PostData} from './PostData';
export default function Feed() {
    return (
    <div className="feed">
        <div className="storyReel"> {
            StoryReelData.map((val) => {
                return (<Story image={
                        val.image
                    }
                    profileSrc={
                        val.profileSrc
                    }
                    title={
                        val.title
                    }/>)
            })
        } </div>

       <MessageSender/> 
       {
        PostData.map((val) => {
            return (<Post profilePic={
                    val.profilePic
                }
                image={
                    val.image
                }
                message={
                    val.message
                }
                username={
                    val.username
                }
                timestamp={
                    val.timestamp
                }/>)
        })
    } </div>)
}
