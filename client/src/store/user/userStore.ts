import { atom } from "recoil";

export const userStore = atom({
  key: "userStoreState",
  default: "mock-user"
});