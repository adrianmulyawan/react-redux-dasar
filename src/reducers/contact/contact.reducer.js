// # Reducer Kontak
// > Dibuat untuk menyimpan store atau state yang berhubungan dengan data contact.

// > import constant variable
import { 
  GET_LIST_CONTACT,
  INSERT_NEW_CONTACT,
  DELETE_CONTACT,
  DETAIL_CONTACT,
  UPDATE_CONTACT
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

  // > State Untuk deleteContact
  deleteContactLoading: false,
  deleteContactFulfilled: false,
  deleteContactRejected: false,

  // > State Untuk detailContact
  detailContactFulfilled: false,

  // > State Untuk updateContact
  updateContactLoading: false,
  updateContactFulfilled: false,
  updateContactRejected: false
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
    case DELETE_CONTACT: 
      console.info(action.payload, '4. Masuk kedalam reducers deleteContact');

      return {
        ...state,
        deleteContactLoading: action.payload.loading,
        deleteContactFulfilled: action.payload.data,
        deleteContactRejected: action.payload.errorMessage
      };
    case DETAIL_CONTACT: 
      console.info(action.payload, '4. Masuk kedalam reducers detailContact');

      return {
        ...state,
        detailContactFulfilled: action.payload.data,
      };
    case UPDATE_CONTACT:
      console.info(action.payload, '4. Masuk kedalam reducers updateContact');

      return {
        ...state,
        updateContactLoading: action.payload.loading,
        updateContactFulfilled: action.payload.data,
        updateContactRejected: action.payload.errorMessage
      };
    default:
      return state;
  };
};

export default contactReducer;