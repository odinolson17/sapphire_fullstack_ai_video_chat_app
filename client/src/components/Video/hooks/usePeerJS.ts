import { useEffect, useRef, useState } from 'react';

const usePeerJS = () => {
  const [peer, setPeer] = useState<any>(null);
  const [myPeerID, setMyPeerID] = useState('');
  const isPeerSet = useRef<boolean>();

  useEffect(() => {
    if (isPeerSet.current) return;
    isPeerSet.current = true;
    (async function initPeer(){
      const myPeer = new (await import('peerjs')).default();
      setPeer(myPeer);

      myPeer.on("open", (id: string) => {
        console.log(`Your peer id is ${id}`);
        setMyPeerID(id);
      })
    })();
  }, []);

  return {
    peer,
    myPeerID
  }
};

export default usePeerJS;