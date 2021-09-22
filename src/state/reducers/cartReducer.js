

const initialState = {
    cart:[]
};


const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            console.log(action.payload)
            if (!state.cart.includes(action.payload)){
                return { 
                    ...state,
                    cart: [...state.cart, action.payload]};
            }
            else {

               const index = state.cart.findIndex(cart => cart.id !== action.payload); //finding index of the item
                console.log(state.cart)
                console.log(action.payload)
                const newArray = [...state.cart];
                console.log(state.cart[index].qty)
                console.log(action.payload.qty)
                
                return{
                    ...state,
                    cart: newArray 
                };
               
           
               
             
            }
          
        // case "DELETE_ITEM":
        //     return state - action.payload;
        case "UPDATE_QTY":

        default:
            return state; 
    }

    
};

export default reducer;