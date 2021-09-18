import React from 'react';
import './Watch.css';
import './VideoPost.css';
import VideoPost from './VideoPost';
import ReactPlayer from 'react-player';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function Watch () {
  
    return(
        <div className = "watch"> 
         <VideoPost
         ProfilePic = "https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg"
         message = "WOW!! that's amazing"    
         username = 'Arp'
         timestamp = 'this is timestamp'
         />
         <ReactPlayer url = 'https://www.youtube.com/watch?v=lT4uJI6TXAg' controls = {true}  className = "video"/>
         <div className= "videoPost__options  ">
               <div className = "videoPost__option">
                 <ThumbUpIcon/>
                 <p>Like</p>
               </div>
               <div className = "videoPost__option">
                   <ChatBubbleOutlineIcon/>
                   <p>Comment</p>
               </div>
               <div className = "videoPost__option">
                    <NearMeIcon/>
                    <p>Share</p>
               </div>
               <div className = "videoPost__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
               </div>
            </div>

            <VideoPost
         ProfilePic = "https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg"
         message = "WOW!! that's amazing"    
         username = 'Arp'
         timestamp = 'this is timestamp'
         />
         <ReactPlayer url = 'https://www.youtube.com/watch?v=lT4uJI6TXAg' controls = {true}  className = "video"/>
         <div className= "videoPost__options  ">
               <div className = "videoPost__option">
                 <ThumbUpIcon/>
                 <p>Like</p>
               </div>
               <div className = "videoPost__option">
                   <ChatBubbleOutlineIcon/>
                   <p>Comment</p>
               </div>
               <div className = "videoPost__option">
                    <NearMeIcon/>
                    <p>Share</p>
               </div>
               <div className = "videoPost__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
               </div>
            </div>
        </div>
        
        
    )
}