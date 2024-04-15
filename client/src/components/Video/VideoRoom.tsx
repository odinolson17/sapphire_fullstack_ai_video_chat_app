import useMediaStream from './hooks/useMediaStream';
import usePeerJS from './hooks/usePeerJS';
import { useVideoSocket } from './provider/socket';
import VideoPlayer from './components/VideoPlayer';

const VideoRoom = () => {
  const socket = useVideoSocket();
  const { peer, myPeerID } = usePeerJS();
  const { stream } = useMediaStream();

  return (
    <>
      <VideoPlayer
        playerID={myPeerID} 
        url={stream}
        muted={true}
        playing={true}
      />
    </>
  )
};

export default VideoRoom;