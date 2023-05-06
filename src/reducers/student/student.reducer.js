import { 
  GET_ALL_STUDENTS,
  ADD_STUDENT
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
    default:
      return state;
  }
};

export default studentReducer;