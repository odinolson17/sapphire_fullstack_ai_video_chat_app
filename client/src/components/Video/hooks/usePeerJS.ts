import { callStore } from '../../../store/call/callStore';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useVideoSocket } from '../provider/socket';

const usePeerJS = () => {
  const videoSocket = useVideoSocket();
  const [peer, setPeer] = useState<any>(null);
  const [myPeerID, setMyPeerID] = useState('');
  const isPeerSet = useRef<boolean>();
  const videoRoomID = useRecoilValue(callStore);

  useEffect(() => {
    if (isPeerSet.current || !videoRoomID.roomid || !videoSocket) return;
    isPeerSet.current = true;
    (async function initPeer(){
      const myPeer = new (await import('peerjs')).default();
      setPeer(myPeer);

      myPeer.on("open", (id: string) => {
        console.log(`Your peer id is ${id}`);
        setMyPeerID(id);
        videoSocket?.emit("join-room", videoRoomID.roomid, id);
      })
    })();
  }, [videoRoomID, videoSocket]);

  return {
    peer,
    myPeerID
  }
};

export default usePeerJS;