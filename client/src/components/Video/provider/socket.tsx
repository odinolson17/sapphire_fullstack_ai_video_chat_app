import { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import io from 'socket.io-client';
import { useRecoilValue } from 'recoil';
import { videoStore } from '../../../store/video/videoStore';

const SocketContext = createContext(null);

export const useVideoSocket = () => {
  const videoSocket: any = useContext(SocketContext);
  return videoSocket;
};

export const SocketProvider = (props: any) => {
  const { children } = props;
  const [videoSocket, setVideoSocket] = useState<any>(null);
  const videoState: boolean = useRecoilValue(videoStore);

  useEffect(() => {
    if (videoState) {
      const connection: any = io('http://localhost:4747');
      setVideoSocket(connection);
    }
  }, [videoState]);

  return (
    <SocketContext.Provider value={videoSocket}>
      {children}
    </SocketContext.Provider>
  )
};