interface ValueType {
  name: string;
  roomid: string;
} 

export const whoToCall = (name: string, roomid: string) => {
  const value: ValueType = {
    name: name,
    roomid: roomid
  };
  return value;
};