const initialState = {
    cart:[]
};


const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            if (state.cart.includes(action.payload)){
            console.log(action.payload.name +"Pizza");
           
             state.cart.map(product => {
                //  console.log("Were doing it")
                  console.log(product.qty)
                console.log(state)
                 action.payload.name === product.name ? {...product, qty: "5"}: product
                 console.log(product.qty)
             })
            }
            else {
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