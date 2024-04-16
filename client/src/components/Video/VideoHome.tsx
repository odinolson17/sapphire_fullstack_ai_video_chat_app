import { SocketProvider } from "./provider/socket";
import { useRecoilState } from "recoil";
import { useState } from "react";
import VideoRoom from "./VideoRoom";
import { videoRoomIdStore } from "../../store/video/videoStore";

function VideoHome () {

  const [roomid, setRoomid] = useState<string>('');
  const [makeSwitch, setMakeSwitch] = useState<boolean>(false);
  const [, setVideoRoomID] = useRecoilState(videoRoomIdStore);

  const switchPages = () => {
    if (roomid && roomid.length > 1) {
      setVideoRoomID(roomid);
      setMakeSwitch(true);
    }
  }

  return (
    <>
    {!makeSwitch && (
      <>
        <h2>Video Chat Section</h2>
        <div>
          <input 
            onChange={(e) => setRoomid(e.target.value)}
            value={roomid}
          />
          <button onClick={switchPages}>
            Join Video Room
          </button>
        </div>
      </>
    )}
    {makeSwitch && (
      <>
        <SocketProvider>
          <VideoRoom />
        </SocketProvider>
      </>
    )}
    </>
  )
};

export default VideoHome;