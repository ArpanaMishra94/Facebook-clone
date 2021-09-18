import React from 'react';
import './Market.css';
import Post from '../Feed/Post';
export default function Market() {
    return (
        <div className = "market">
        
             <Post
                    profilePic="https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg"
                    image="http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg"
                    message="WOW!! that's amazing"
                    username='Arp'
                    timestamp='this is timestamp'
                />
                <Post
                    profilePic="https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg"
                    image="http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg"
                    message="WOW!! that's amazing"
                    username='Arp'
                    timestamp='this is timestamp'
                />
                <Post
                    profilePic="https://as2.ftcdn.net/v2/jpg/00/89/61/71/1000_F_89617160_LT1oEalUcTKs8kc5nHdubKDtW5ZjHzJS.jpg"
                    image="http://heritagegetaways.in/wp-content/uploads/2019/04/Agra-Taj-Mahal-1.jpg"
                    message="WOW!! that's amazing"
                    username='Arp'
                    timestamp='this is timestamp'
                />

        </div>

    )
}