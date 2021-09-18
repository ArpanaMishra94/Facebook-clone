import React from 'react';
import './Profile.css';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Post from './Feed/Post';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function Profile() {
    return (

        <div className="profile">
            <div className="profile__top">

                <div className="profile__cover">
                    <img className="profileCoverImg" src="http://2.bp.blogspot.com/-nfvjMm5r4HE/UAEzYD80HII/AAAAAAAAARA/CASgQfzOD3w/s1600/free-facebook-cover-photo-make-your-own.jpg " alt=""/>
                    <img className="profileUserImg" src="https://expertphotography.com/wp-content/uploads/2020/08/profile-photos-4.jpg" alt=""/>
                    <button className="editPicButton"><PhotoCameraIcon/><p>Edit Cover photo</p>
                    </button>
                </div>
                <div className="name-bio">
                    <h2>Arpana Mishra</h2>
                    <h4>Add Bio</h4>
                </div>
                <div className="profile__desc">
                    <div className="profile_item_list">
                        <div className="profile__items">Post</div>
                        <div className="profile__items">About</div>
                        <div className="profile__items">Friends</div>
                        <div className="profile__items">Photos</div>
                        <div className="profile__items">
                            <p>More</p>
                            <ExpandMoreIcon/></div>
                    </div>
                    <div className="profile_button_list">
                        <button className="Desc__moto " id="moto__story"><AddCircleOutlineIcon/><p>Add to Story</p>
                        </button>
                        <button className="Desc__moto" id="moto__edit"><EditIcon/><p>Edit Profile</p>
                        </button>
                        <button className="Desc__moto" id="moto__horizon"><MoreHorizIcon/></button>
                    </div>
                </div>
            </div>

            <div id="profile__post">
                <Post profilePic="https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg" image="http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg" message="WOW!! that's amazing" username='Arp' timestamp='this is timestamp'/>

                <Post profilePic="https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg" image="http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg" message="WOW!! that's amazing" username='Arp' timestamp='this is timestamp'/>


                <Post profilePic="https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg" image="http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg" message="WOW!! that's amazing" username='Arp' timestamp='this is timestamp'/>
            </div>
        </div>

    )
}
