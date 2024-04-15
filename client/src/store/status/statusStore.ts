import { atom } from "recoil";

export const statusStore = atom<boolean>({
  key: "statusStore",
  default: false
});

export const triggerTextStore = atom<boolean>({
  key: "triggerTextStore",
  default: false
});