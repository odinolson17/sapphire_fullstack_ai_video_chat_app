import { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import io from 'socket.io-client';

const SocketContext = createContext(null);

export const useVideoSocket = () => {
  const videoSocket: any = useContext(SocketContext);
  return videoSocket;
};

export const SocketProvider = (props: any) => {
  const { children } = props;
  const [videoSocket, setVideoSocket] = useState<any>(null);

  useEffect(() => {
    const connection: any = io('http://localhost:4747');
    setVideoSocket(connection);
  }, []);

  return (
    <SocketContext.Provider value={videoSocket}>
      {children}
    </SocketContext.Provider>
  )
};