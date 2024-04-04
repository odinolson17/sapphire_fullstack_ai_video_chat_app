import { atom } from "recoil";

export const userStore = atom({
  key: "userStoreState",
  default: "mock-user"
});

export const userEmailStore = atom({
  key: "userEmailStore",
  default: "mock-email"
})