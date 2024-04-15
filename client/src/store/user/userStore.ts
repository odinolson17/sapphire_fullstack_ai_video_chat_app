import { atom } from "recoil";

export const userStore = atom<string>({
  key: "userStoreState",
  default: "mock-user"
});

export const userEmailStore = atom<string>({
  key: "userEmailStore",
  default: "mock-email"
});

export const userProfilePicStore = atom<string>({
  key: "userProfilePicStore",
  default: "NONE"
});