import { useEffect, useRef, useState } from 'react';

const useMediaStream = () => {

  const [videoState, setVideoState] = useState<MediaStream | null>(null);
  const isStreamAlreadySet = useRef<boolean>(false);

  useEffect(() => {
    if (isStreamAlreadySet.current) return;
    isStreamAlreadySet.current = true;
    (async function initStream () {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true
        });
        console.log('Setting stream!');
        setVideoState(stream);
      } catch (err) {
        console.log(`There was an error with the media source: ${err}`);
      }
    })();
  }, []);

  return {
    stream: videoState
  }
};

export default useMediaStream;