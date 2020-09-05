import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function Video(props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        onClick={onVideoPress}
        loop
        ref={videoRef}
        src={props.url}
      ></video>

      <VideoFooter
        channel={props.channel}
        description={props.description}
        song={props.song}
      />
      <VideoSideBar
        likes={props.likes}
        share={props.share}
        message={props.message}
      />
    </div>
  );
}

export default Video;
