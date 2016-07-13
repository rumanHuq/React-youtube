import React, {Component} from 'react';
import VideoListItem from './VideoListItem';
const VideoList = ({videos, onSelectVid})=>{
    const VideoItems = videos.map(video=>{
        return <VideoListItem 
        key={video.etag} 
        video={video}
        onSelectVid = {onSelectVid}
        />
    });
    return (
        <ul className='col-md-4 list-group'>{VideoItems}</ul>
    );
}

export default VideoList;