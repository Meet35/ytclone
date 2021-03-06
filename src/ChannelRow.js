import React from 'react';
import "./ChannelRow.css";
import {Avatar} from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({image, channel, verified, subscriber, videos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
            </div>
            <p> {subscriber} Subscribers • {videos} Videos</p>
            <p>{description}</p>
        </div>
    )
}

export default ChannelRow
