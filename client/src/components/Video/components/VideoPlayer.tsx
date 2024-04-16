import ReactPlayer from "react-player";
import { VideoPlayerTypes } from "./types";

function VideoPlayer ({ url, muted, playing }: VideoPlayerTypes) {
  
  return (
    <>
      <ReactPlayer 
        url={url}
        muted={muted}
        playing={playing}
      />
    </>
  )
}

export default VideoPlayer;