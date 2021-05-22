import React from 'react'

function VideoRow({view,subscriber, description, timestamp, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRaw__headline">
                    {channel} •{" "} 
                    <span className="videoRaw__subs">
                    <span className="videoRaw__sub">{subscriber} Subscribers </span>
                    </span>{" "}
                    {view} Views • {timestamp}
                    
                </p>
                <p className="videoRaw__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
