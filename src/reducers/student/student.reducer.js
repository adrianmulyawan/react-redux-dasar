import { 
  GET_ALL_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  DETAIL_STUDENT,
  UPDATE_STUDENT
} from "../../actions/student.action";

const initialState = {
  // > State untuk action getAllStudents
  // => kondisi awalnya state bernilai false
  getAllStudentsLoading: false, // kondisi ketika data loading
  getAllStudentsFulfilled: false, // kondisi ketika data fulfilled
  getAllStudentsRejected: false, // kondisi ketika data rejected

  // > State untuk action addContact
  // => kondisi awalnya state bernilai false
  addStudentLoading: false,
  addStudentFulfilled: false,
  addStudentRejected: false,

  // > State untuk action deleteStudent
  deleteStudentLoading: false,
  deleteStudentFulfilled: false,
  deleteStudentRejected: false,

  // > State untuk action detailStudent
  detailStudentFulfilled: false,

  // > State untuk action updateContact
  updateStudentLoading: false,
  updateStudentFulfilled: false,
  updateStudentRejected: false
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      console.info(action.payload, 'Masuk kedalam reducers getAllStudents');

      return {
        ...state,
        getAllStudentsLoading: action.payload.loading,
        getAllStudentsFulfilled: action.payload.data,
        getAllStudentsRejected: action.payload.errorMessage
      };
    case ADD_STUDENT:
      console.info(action.payload, 'Masuk kedalam reducers addStudent');
      
      return {
        ...state,
        addStudentLoading: action.payload.loading,
        addStudentFulfilled: action.payload.data,
        addStudentRejected: action.payload.errorMessage
      };
    case DELETE_STUDENT:
      console.info(action.payload, 'Masuk kedalam reducers deleteStudent');

      return {
        ...state,
        deleteStudentLoading: action.payload.loading,
        deleteStudentFulfilled: action.payload.data,
        deleteStudentRejected: action.payload.errorMessage
      };
    case DETAIL_STUDENT:
      console.info(action.payload, 'Masuk kedalam reducers detailStudent');

      return {
        ...state,
        detailStudentFulfilled: action.payload.data
      };
    case UPDATE_STUDENT:
      console.info(action.payload, 'Masuk kedalam reducers updateStudent');

      return {
        ...state,
        updateStudentLoading: action.payload.loading,
        updateStudentFulfilled: action.payload.data,
        updateStudentRejected: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default studentReducer;