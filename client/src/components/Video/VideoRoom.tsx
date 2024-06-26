import { useEffect } from 'react';
import useMediaStream from './hooks/useMediaStream';
import usePeerJS from './hooks/usePeerJS';
import useVideoPlayer from './hooks/useVideoPlayer';
import { useVideoSocket } from './provider/socket';
import VideoPlayer from './components/VideoPlayer';

const VideoRoom = () => {
  const videoSocket = useVideoSocket();
  const { peer, myPeerID } = usePeerJS();
  const { stream } = useMediaStream();
  const { players, setPlayers } = useVideoPlayer();

  useEffect(() => {
    if (!videoSocket || !peer || !stream) return;
    const handleUserConnected = (newUser: string) => {
      const call = peer.call(newUser, stream);

      call.on("stream", (incomingStream: any) => {
        setPlayers((prev: any) => ({
          ...prev,
          [newUser]: {
            url: incomingStream,
            muted: true,
            playing: true
          }
        }))
      });
    };

    videoSocket.on("user-connected", handleUserConnected);

    return () => {
      videoSocket.off("user-connected", handleUserConnected);
    };
  }, [peer, videoSocket, stream, setPlayers]);

  useEffect(() => {
    if (!peer || !stream) return;
    peer.on("call", (call: any) => {
      call.answer(stream);

      call.on("stream", (incomingStream: any) => {
        setPlayers((prev: any) => ({
          ...prev,
          [call.peer]: {
            url: incomingStream,
            muted: true,
            playing: true
          }
        }))
      });
    });
  }, [peer, setPlayers, stream]);

  useEffect(() => {
    if (!stream || !myPeerID) return;
    setPlayers((prev: any) => ({
      ...prev,
      [myPeerID]: {
        url: stream,
        muted: true,
        playing: true
      }
    }))
  }, [stream, setPlayers, myPeerID]);

  return (
    <>
      {Object.keys(players).map((playerInfo: any) => {
        const { url, muted, playing } = players[playerInfo];
        return <VideoPlayer
                  key={playerInfo} 
                  url={url}
                  muted={muted}
                  playing={playing}
                />
      })}
    </>
  )
};

export default VideoRoom;