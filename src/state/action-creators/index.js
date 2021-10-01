import * as actionTypes from "../action-types/index";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: item,
  };
};

export const adjustQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};
