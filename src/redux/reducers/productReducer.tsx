import produce from "immer";
import {Action, ProductState} from "../../models/Redux";


export const defaultState: ProductState = {
  suggestions: [],
};

const ProductReducer = produce((state = defaultState, action: Action) => {
  switch (action.type) {
    case "ALTER_SUGGESTIONS":
      state.suggestions = action.payload;
      break;

    default:
      return state;
  }
}, defaultState);

export default ProductReducer;