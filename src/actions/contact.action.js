// > Import axios (consume api)
import axios from "axios";

// > Buat constant variable (akan dioperkan ke reducers contact)
// => Digunakan didalam case 
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const INSERT_NEW_CONTACT = "INSERT_NEW_CONTACT";

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