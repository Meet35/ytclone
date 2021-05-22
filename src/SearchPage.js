import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow.js'
import VideoRow from './VideoRow.js'


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image
            channel
            verified
            subscriber
            videos
            description
            />

            <hr/>


            <VideoRow/>
        </div>
    )
}

export default SearchPage
