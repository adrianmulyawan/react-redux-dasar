import { GET_ALL_STUDENTS } from "../../actions/student.action";

const initialState = {
  // > State untuk action getAllStudents
  // => kondisi awalnya state bernilai false
  getAllStudentsLoading: false, // kondisi ketika data loading
  getAllStudentsFulfilled: false, // kondisi ketika data fulfilled
  getAllStudentsRejected: false, // kondisi ketika data rejected
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
    default:
      return state;
  }
};

export default studentReducer;