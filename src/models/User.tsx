import {Group} from "./Group";

export interface User {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  username: string;
  profileImg: string;
  groups: Group[]
}

