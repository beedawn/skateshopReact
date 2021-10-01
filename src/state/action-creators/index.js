import * as actionTypes from '../action-types/index';

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: item
        })
    }
}

export const removeFromCart = (item) => {
    return(dispatch) => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload:item
        })
    }
}

export const adjustQty = (itemID, value) => {
    return(dispatch) => {
        dispatch({
            type:actionTypes.ADJUST_QTY,
            payload:{
                id: itemID,
                qty:value
            }
        })
    }
}