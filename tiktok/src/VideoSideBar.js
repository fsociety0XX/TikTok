import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import "./VideoSideBar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSideBar(props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSideBar">
      <div className="videoSideBar__button">
        {liked ? (
          <FavoriteIcon onClick={() => setLiked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon onClick={() => setLiked(true)} fontSize="large" />
        )}
        <p>{liked ? Number(props.likes) + 1 : props.likes}</p>
      </div>
      <div className="videoSideBar__button">
        <MessageIcon fontSize="large" />
        <p>{props.message}</p>
      </div>
      <div className="videoSideBar__button">
        <ShareIcon fontSize="large" />
        <p>{props.share}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
