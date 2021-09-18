import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
export default function Feed() {
    return (
        <div className = "feed">
        <StoryReel/>
        <MessageSender/>
        <Post
         profilePic = "https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg"
         image = "http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg"
         message = "WOW!! that's amazing"    
         username = 'Arp'
         timestamp = 'this is timestamp'
         /> 
        <Post
         profilePic = "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         image = "https://webmeup.com/upload/blog/lead-image-105.png"
         message = "WOW"    
         username = 'Jen'
         timestamp = 'this is timestamp'
        />
        <Post/>
        </div>
    )
}