import React from 'react';
import './Market.css';
import Post from '../Feed/Post';
import {MarketData} from './MarketData';
export default function Market() {
    return (
        <div className = "market">
           {MarketData.map((val) => {
               return (
                <Post
                    profilePic= {val.profilePic}
                    image= {val.image}
                    message= {val.message}
                    username= {val.username}
                    timestamp= {val.timestamp}
                />
               )
           })}
               
        </div>

    )
}