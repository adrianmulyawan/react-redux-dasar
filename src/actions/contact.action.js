// > Import axios (consume api)
import axios from "axios";

// > Buat constant variable (akan dioperkan ke reducers contact)
// => Digunakan didalam case 
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const INSERT_NEW_CONTACT = "INSERT_NEW_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";

// > Aksi untuk dapatkan seluruh data kontak
export const getListContacts = () => {
  console.info('2. Masuk kedalam action getListContacts')

  // => dispatch adalah penghubung antara conmponent view dengan action dan ke reducers
  return async (dispatch) => {
    // => handle ketika kondisi loading (data masih di proses)
    dispatch({
      type: GET_LIST_CONTACT,
      // => akan dioper ke reducers
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // => handle ketika kondisi fulfilled
    try {
      const response = await axios.get('http://localhost:3004/contacts');
      console.info(response.data, '3. Data berhasil didapatkan!');

      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // => handle ketika kondisi rejected
    catch (error) {
      console.info(error.message, '3. Data gagal didapatkan!');
      
      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    };
  };
};

// > Action untuk tambah data kontak (insert new contact)
export const insertNewContact = (data) => {
  console.info('2. Masuk kedalam action insertNewContact');

  return async (dispatch) => {
    // => handle ketika data masih loading
    dispatch({
      type: INSERT_NEW_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      },
    });

    // => handle ketika insert data rejected fulfilled
    try {
      const response = await axios.post('http://localhost:3004/contacts', data);
      console.info(response.data, '3. Data berhasil ditambahkan!');

      dispatch({
        type: INSERT_NEW_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // => hanlde ketika insert data rejected
    catch (error) {
      console.info(error.message, '3. Data gagal ditambahkan!');

      dispatch({
        type: INSERT_NEW_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    };
  };
};

// > Action untuk handle proses hapus data contact
export const deleteContact = (id) => {
  console.info('2. Masuk kedalam action deleteContact');

  return async (dispatch) => {
    // => handle ketika proses delete data masih loading
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // => handle ketika proses delete data fulfilled
    try {
      const response = await axios.delete(`http://localhost:3004/contacts/${id}`);
      console.info(response.data, `3. Data dengan id = ${id} berhasil dihapus`);

      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // => handle ketika proses delete data rejectex
    catch (error) {
      console.info(error.message, `3. Data dengan id = ${id} gagal dihapus`);

      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    };
  };
};

// > Action untuk mendapatkan detail contact
export const detailContact = (data) => {
  return (dispatch) => {
    // => kondisi data ditemukan (tidak menggunakan api)
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        loading: false,
        data: data,
        errorMessage: false,
      },
    });
  };
};