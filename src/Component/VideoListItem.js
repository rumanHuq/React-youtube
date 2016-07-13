import React from 'react';

const VideoListItem = ({video,onSelectVid})=>{
    let url = video.snippet.thumbnails.high.url;
    return(
        <li className='list-group-item' onClick= {()=>{onSelectVid(video)}}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={url}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;



/*
    Arekta jinish rwalise korlam. Jeheto eikhane stateless componentDidMount() {
        so state decalaration available na, eita ultimately main.js er context e run korbe
        line 6 e jokhon onselectVid function invoke kortesi,
        onselect function e state set koretsi current object in list item which is clicked
    }
    
 */