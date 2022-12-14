import React from "react";

const VideoDetail= ({video})=>{
    if(!video){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
        <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} frameBorder="0"></iframe>
        </div>
            <div className="segment">
                <h4 className="ui header" dangerouslySetInnerHTML={{__html: video.snippet.title}}></h4>
                <p dangerouslySetInnerHTML={{__html: video.snippet.description}}></p>
            </div>
        </div>)
}
export default VideoDetail;