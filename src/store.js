import { createStore } from "redux";


const initialCart=[];

function reducer (state = initialCart, action){
    return state;
}
export const store = createStore(reducer);