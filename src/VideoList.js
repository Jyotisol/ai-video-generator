import React from 'react';

const VideoList = ({ videos }) => {
    return (
        <div>
            {videos.map((video, index) => (
                <div key={index}>
                    <h3>{video.title}</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
