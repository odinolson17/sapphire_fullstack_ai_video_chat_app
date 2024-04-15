import { atom } from "recoil";

interface ValueType {
  name: string | undefined;
  roomid: string | undefined;
} 

const value: ValueType = {
  name: undefined,
  roomid: undefined,
};

export const callStore = atom<ValueType>({
  key: "callStore",
  default: value
});

export const callSingularContactProfilePic = atom<string>({
  key: "callSingularContactProfilePic",
  default: 'NONE'
});