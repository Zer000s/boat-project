import React from "react";
import video1 from "../access/video1.mp4";
import video2 from "../access/video2.mp4";
import video3 from "../access/video3.mp4";
import video4 from "../access/video4.mp4";
import video5 from "../access/video5.mp4";
import video6 from "../access/video6.mp4";
import video7 from "../access/video7.mp4";
const video = [
    video1, video2,
    video3, video4,
    video5, video6,
    video7
]


export default function Video() {
    const [loadImage, setLoadImage] = React.useState(true);
    React.useEffect(() => {setTimeout(() => {
        setLoadImage(false)
    }, 700)}, []);


    return (
        <div className="galary-video">
            <h1>ВИДЕО</h1>
            <div className="photos">
                {loadImage ?
                    <span className="loader"></span>
                    :
                    video.map((v) => {return (<video className="photo" key={v} src={v} preload="metadata" type="video/mp4" controls="controls"/>);})
                }
            </div>
        </div>
    );
}