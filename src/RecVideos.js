import React from 'react'
import "./RecVideos.css";
import VideoCard from "./VideoCard";

function RecVideos() {
    return (
        <div className="recvideos">
            <h2>Recommanded</h2>
            <div className="recvideos__videos">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>


            </div>
        </div>
    )
}

export default RecVideos
