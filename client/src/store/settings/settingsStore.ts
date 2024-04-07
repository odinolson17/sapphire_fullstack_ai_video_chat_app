import { atom } from "recoil";

export const settingsStore = atom({
  key: 'settingsStore',
  default: 'ALL'
})