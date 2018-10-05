import { createStore } from "redux";
import rootReducer from "../reducers/index";

/**
 * @description The basic idea of a store is that it is a housing
 * component of all the state in the application
 * the state of the whole application lives inside the store.
 */
const store = createStore(rootReducer);

export default store;