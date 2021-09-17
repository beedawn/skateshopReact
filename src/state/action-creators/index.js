export const addToCart = (item, qty) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_ITEM",
            payload: item
        })
    }
}
