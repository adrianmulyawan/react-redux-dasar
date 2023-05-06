import axios from "axios";

// > Constant variable
// => akan diimport kedalam reducer dan digunakan didalam case
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";

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

// > Action untuk menambahkan student baru
export const addStudent = (data) => {
  console.info('Masuk kedalam action addStudent');

  return async (dispatch) => {
    // => handle ketika data loading
    dispatch({
      type: ADD_STUDENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // => handle ketika berhasil menambahkan data (fulfilled)
    try {
      const response = await axios.post('http://localhost:3004/students', data);
      console.info(response.data, 'Berhasil menambahkan data student');

      dispatch({
        type: ADD_STUDENT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // => handle ketika gagal menambahkan data (rejected)
    catch (error) {
      console.info(error.message, 'Gagal menambahkan data student');

      dispatch({
        type: ADD_STUDENT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

// > Action untuk hapus data student
export const deleteStudent = (id) => {
  console.info('Masuk kedalam action deleteStudent');
  
  return async (dispatch) => {
    // => handle untuk loading data
    dispatch({
      type: DELETE_STUDENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // => handle untuk data berhasil dihapus
    try {
      const response = await axios.delete(`http://localhost:3004/students/${id}`);
      console.info(response.data, 'Data berhasil dihapus');

      dispatch({
        type: DELETE_STUDENT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // => handle untuk data gagal dihapus
    catch (error) {
      console.info(error.message, 'Data gagal dihapus');

      dispatch({
        type: DELETE_STUDENT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message
        },
      });
    }
  };
};