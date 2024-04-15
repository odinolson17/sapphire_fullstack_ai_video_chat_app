import { atom } from "recoil";

export const settingsStore = atom<string>({
  key: 'settingsStore',
  default: 'ALL'
})