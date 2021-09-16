export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_ITEM",
            payload: item
        })
    }
}