import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import rootReducer from "./reducers/rootreducer";

const store = createStore(
	rootReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunk.withExtraArgument({ getFirebase }))
	)
);
export default store;
