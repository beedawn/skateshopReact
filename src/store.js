import { createStore } from "redux";

const initialCart = [];

function reducer(state = initialCart, action) {
  switch (action.type){
    case 'ADD_PRODUCT':
      return {
        product: state.product,
      };
      default:{
          return state
      }
  }
}
export const store = createStore(reducer);
