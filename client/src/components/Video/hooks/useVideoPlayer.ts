import { useState } from 'react';

const useVideoPlayer = () => {
  const [players, setPlayers] = useState<any>({});
  return {players, setPlayers};
};

export default useVideoPlayer;