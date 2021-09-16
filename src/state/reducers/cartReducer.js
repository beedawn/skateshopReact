const initialState = {
    cart:[]
};


const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            if (state.cart.includes(action.payload)){
            console.log(action.payload);
            }
            else {
                return { 
                    ...state,
                    cart: [...state.cart, action.payload]};
            }
        // case "DELETE_ITEM":
        //     return state - action.payload;
        default:
            return state; 
    }

    
};

export default reducer;