// # Reducer Kontak
// > Dibuat untuk menyimpan store atau state yang berhubungan dengan data contact.

// > import constant variable
import { GET_LIST_CONTACT } from "../../actions/contact.action";

const initialState = {
  // > State Untuk getListContact
  getListContactsLoading: false,
  getListContactsFulfilled: false,
  getListContactsRejected: false,
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
    default:
      return state;
  };
};

export default contactReducer;