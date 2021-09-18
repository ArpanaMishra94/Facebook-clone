import React from 'react';
import './Widgets.css';
export default function Widgets(){
    return (
        <div className = "widgets">
        <div>
           <iframe 
            src = "http://www.youtube.com/embed/xDMP3i36naA" 
            
            // width= "350"
            //  height= "100%"
            //   scrolling = "no" 
            //   style ={{border: "none", overflow: "hidden"}}
            //   frameBorder="0"
            //   allowTransparency="true"
            //   allow= "encrypted-media"
              >
              
              </iframe>
              </div>

             <div> <iframe src = "https://www.youtube.com/embed/v64KOxKVLVg"></iframe>   </div>
              
           
        </div>
    )
}