import { combineReducers } from "redux";
import UserReducer from "./reducers/userReducer";
import ProductReducer from "./reducers/productReducer";


export const rootReducer = combineReducers({
  UserReducer,
  ProductReducer
});
export type RootState = ReturnType<typeof rootReducer>;