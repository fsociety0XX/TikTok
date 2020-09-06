import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./Axios";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    getPosts();
  }, []);

  console.log(videos, "videos");
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            likes={video.likes}
            share={video.share}
            message={video.message}
            channel={video.channel}
            description={video.description}
            song={video.song}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
