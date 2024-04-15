import { useState } from "react";
import VideoRoom from "./VideoRoom";

function VideoHome () {

  const [roomid, setRoomid] = useState<string>('');
  const [makeSwitch, setMakeSwitch] = useState<boolean>(false);

  const switchPages = () => {
    if (roomid && roomid.length > 1) setMakeSwitch(true);
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
        <VideoRoom />
      </>
    )}
    </>
  )
};

export default VideoHome;