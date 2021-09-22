import React from 'react';
import './Profile.css';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Post from './Feed/Post';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ProfilePostData} from './ProfilePostData';

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile__top">
                     <div className="profile__cover">
                     <div className="profileCoverImg" 
                     style = {{backgroundImage: `url(${
                      "https://timelinecovers.pro/facebook-cover/download/pc-code-facebook-cover.jpg"
                  })`}}>
                   <button><PhotoCameraIcon/><p>Edit Cover photo</p></button>
                  <img className="profileUserImg" src="http://clareville.co.uk/wp-content/uploads/2017/11/woman-on-laptop.jpg" alt=""/>
                  </div>
                     </div>
                 <div className="profile__nameBio">
                    <h2>Arpana Mishra</h2>
                    <h4>Add Bio</h4>
                </div>
                <div className="profile__desc">
                    <div className="profile__items">
                        <div className="profile__item">Post</div>
                        <div className="profile__item">About</div>
                        <div className="profile__item">Friends</div>
                        <div className="profile__item">Photos</div>
                        <div className="profile__item">
                            <p>More</p>
                            <ExpandMoreIcon/></div>
                    </div>
                    <div className="profile__buttons">
                        <button className="Desc__moto " id="moto__story"><AddCircleOutlineIcon/><p>Add to Story</p>
                        </button>
                        <button className="Desc__moto" id="moto__edit"><EditIcon/><p>Edit Profile</p>
                        </button>
                        <button className="Desc__moto" id="moto__horizon"><MoreHorizIcon/></button>
                    </div>
                </div>
            </div>
             <div className = "profile__bottom">
             <div className = "profile__bottomCol1">
                <div className = "profile__col1Card1">
                    <h3 style = {{color: "black", paddingTop: "15px", paddingLeft: "15px"}}>Intro</h3>
                    <div className = "profile__intro">
                     <img src = "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/X_t0JnueVu-.png" 
                     style = {{color: "gray", padding: "13px"}}/>
                    <p style = {{color: "black", paddingTop: "15px", fontSize: "17px"}}>Lives in Agra, Uttar Pradesh</p>
                    </div>
                    <div className = "profile__intro">
                     <img src = "https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/CZzXbYX7tI2.png" 
                     style = {{color: "gray", padding: "13px"}}/>
                    <p style = {{color: "black", paddingTop: "15px", fontSize: "17px"}}>Joined March 2018</p>
                    </div>
                </div>
                <div className = "profile__col1Card2">

                </div>
                <div className = "profile__col1Card3">

                </div>
             </div>
             <div className = "profile__bottomCol2">
               {ProfilePostData.map((val) => {
                return(
               <Post className = "profile__postt"
                profilePic = {val.profilePic}
                image = {val.image} 
                message = {val.message}
                username = {val.userName}
                timestamp = {val.timeStamp}/>
                )
            })}
             </div>
            </div>
        </div>

    )
}
