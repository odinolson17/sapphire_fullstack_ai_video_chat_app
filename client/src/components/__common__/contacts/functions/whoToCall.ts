interface ValueType {
  name: string;
  email: string;
  roomid: string;
} 

export const whoToCall = (name: string, email: string, roomid: string) => {
  const value: ValueType = {
    name: name,
    email: email,
    roomid: roomid
  };
  return value;
};