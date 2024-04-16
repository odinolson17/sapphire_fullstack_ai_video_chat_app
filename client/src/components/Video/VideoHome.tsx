import { SocketProvider } from "./provider/socket";
import VideoRoom from "./VideoRoom";


function VideoHome () {

  return (
    <>
      <SocketProvider>
        <VideoRoom />
      </SocketProvider>
    </>
  );
};

export default VideoHome;