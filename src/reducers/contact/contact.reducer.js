// # Reducer Kontak
// > Dibuat untuk menyimpan store atau state yang berhubungan dengan data contact.

// > import constant variable
import { 
  GET_LIST_CONTACT,
  INSERT_NEW_CONTACT
} from "../../actions/contact.action";

const initialState = {
  // > State Untuk getListContact
  getListContactsLoading: false,
  getListContactsFulfilled: false,
  getListContactsRejected: false,

  // > State Untuk insertNewContact
  insertNewContactLoading: false,
  insertNewContactFulfilled: false,
  insertNewContactRejected: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    // > case untuk getListContact
    case GET_LIST_CONTACT:
      console.info(action.payload, '4. Masuk kedalam reducers getListContacts');

      return {
        ...state,
        getListContactsLoading: action.payload.loading,
        getListContactsFulfilled: action.payload.data,
        getListContactsRejected: action.payload.errorMessage
      };
    case INSERT_NEW_CONTACT:
      console.info(action.payload, '4. Masuk kedalam reducers insertNewContact');

      return {
        ...state,
        insertNewContactLoading: action.payload.loading,
        insertNewContactFulfilled: action.payload.data,
        insertNewContactRejected: action.payload.errorMessage
      };
    default:
      return state;
  };
};

export default contactReducer;