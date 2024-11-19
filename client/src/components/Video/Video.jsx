import React from 'react';

const VideoPage = ({ videoUrl }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl text-center mb-6">Videos for Mental Health and Stress Relief</h1>
            <div className="flex justify-center">
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPage;
