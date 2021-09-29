import * as actionTypes from "../action-types/index";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        //check if item is in cart already
      if (!state.cart.includes(action.payload)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        const newItem = [...state.cart];
        return {
          ...state,
          cart: newItem,
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case actionTypes.ADJUST_QTY:
      return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty}: item)
      };

    default:
      return state;
  }
};

export default reducer;
