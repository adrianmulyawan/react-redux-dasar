import { combineReducers } from "redux";
import contactReducer from "./contact/contact.reducer";

// > Store digunakan untuk menampung state dari aplikasi yang dibuat.
// > Karena reducer itu banyak jadi kita harus combine kedalam store kita.
const store = combineReducers({
  contactReducer,
});

export default store;