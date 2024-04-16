import { atom } from "recoil";

export const videoRoomIdStore = atom<string>({
  key: "videoRoomIdStore",
  default: ""
});