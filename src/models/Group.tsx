import {Item} from "./Item";

export interface Group {
  name: string;
  users: string[];
  items: Item[];
}