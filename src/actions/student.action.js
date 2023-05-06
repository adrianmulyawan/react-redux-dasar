import axios from "axios";

// > Constant variable
// => akan diimport kedalam reducer dan digunakan didalam case
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";

// > Action untuk mendapatkan seluruh data students
export const getAllStudents = () => {
  console.info('Masuk kedalam action getAllStudents');

  return async (dispatch) => {
    // => handle ketika kondisi data loading
    dispatch({
      type: GET_ALL_STUDENTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // => handle ketika kondisi data fulfilled
    try {
      const response = await axios.get('http://localhost:3004/students');
      console.info(response.data, '=> data students berhasil didapatkan');

      dispatch({
        type: GET_ALL_STUDENTS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    catch (error) {
      console.info(error.message, '=> gagal mendapatkan data students');

      dispatch({
        type: GET_ALL_STUDENTS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};