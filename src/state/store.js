import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools }  from 'redux-devtools-extension';



export const store = createStore(reducers,
{},
compose(applyMiddleware(thunk))
);
