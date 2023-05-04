import { combineReducers } from "redux";
import contactReducer from "./contact/contact.reducer";

// > combine reducernya, karena dalam 1 aplikasi bisa > 1 reducers.
// > combine menggunakan method 'combineReducer' dari package redux.
export default combineReducers({
  contactReducer,
});