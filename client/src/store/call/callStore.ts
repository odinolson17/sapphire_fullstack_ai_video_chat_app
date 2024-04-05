import { atom } from "recoil";

interface ValueType {
  name: string | undefined;
  roomid: string | undefined;
} 

const value: ValueType = {
  name: undefined,
  roomid: undefined
};

export const callStore = atom({
  key: "callStore",
  default: value
});