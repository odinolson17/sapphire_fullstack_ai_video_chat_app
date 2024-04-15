import ReactPlayer from "react-player";
import { VideoPlayerTypes } from "./types";

function VideoPlayer ({ playerID, url, muted, playing }: VideoPlayerTypes) {
  
  return (
    <>
      <ReactPlayer 
        key={playerID}
        url={url}
        muted={muted}
        playing={playing}
      />
    </>
  )
}

export default VideoPlayer;