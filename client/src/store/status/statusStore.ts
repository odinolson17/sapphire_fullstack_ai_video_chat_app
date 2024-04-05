import { atom } from "recoil";

export const statusStore = atom({
  key: "statusStore",
  default: false
});

export const triggerTextStore = atom({
  key: "triggerTextStore",
  default: false
});