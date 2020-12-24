import React from 'react';
import video from '../../assets/video/video-city.mp4';
import './HomeVideo.css'
const HomeVideo = () => {
    return (
        <div style={{width: '100%'}}>
            <div style={{width: '100%'}} className="viedo-block">
            <video src={video} autoPlay loop muted className="video" />
            </div>
        </div>
    );
};

export default HomeVideo;