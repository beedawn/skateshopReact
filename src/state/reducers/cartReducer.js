const initialState = {
    cart:[]
};


const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.cart.includes(action.payload)){
                return { 
                    ...state,
                    cart: [...state.cart, action.payload]};
            }
          
        // case "DELETE_ITEM":
        //     return state - action.payload;
        case "UPDATE_QTY":

        default:
            return state; 
    }

    
};

export default reducer;