import { atom } from "recoil";

export const videoStore = atom<boolean>({
  key: "videoStore",
  default: false
});