import {Suggestion} from "./Item";

export interface Action {
  payload: any;
  type: string;
}

export interface ProductState {
  suggestions: Suggestion[]
}