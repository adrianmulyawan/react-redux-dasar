import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getListContacts } from '../../actions/contact.action';

const CardContactComponent = () => {
  // > Consume state ke ui
  const { 
    getListContactsLoading,
    getListContactsFulfilled,
    getListContactsRejected,
  } = useSelector((state) => state.contactReducer);

  // > dispatch digunakan untuk menghubungkan component view dengan action dan reducers
  const dispatch = useDispatch();

  // > useSelector
  // => kita manfaatkan untuk render ulang card
  // => apabila didalam reducers ini telah terdapat data baru
  // => kita implementasikan menggunakan useEffect
  const { deleteContactFulfilled } = useSelector((state) => state.contactReducer);

  // > useEffect untuk ambil seluruh data contact
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      console.info('1. Masuk kedalam useEffect cardContact.component.jsx');
      i++;
      // > jalankan dispatch disini
      // => menjalankan method getListContact
      // => method akan dijalankan saat pertama kali halaman ini dirender
      dispatch(getListContacts());
    }
  }, [dispatch, i]);

  // > handle button delete contact
  const handleDeleteContact = (event) => {
    console.info('1. Masuk kedalam handle button delete di tekan');

    const id = event.target.value;

    const confirmation = window.confirm('Are you sure to delete data?');

    if (confirmation === true) {
      dispatch(deleteContact(id));
      alert('Success delete data!');
    }
  };

  // > useEffect untuk handle load data contact
  // => setelah data berhasil dihapus
  // => kondisinya bila deleteContactFulfilled = true
  let j = 0;
  useEffect(() => {
    if (j === 0) {
      console.info('5. Render ulang list contact bila deleteContactFullfilled = true');
      if (deleteContactFulfilled) {
        // => render ulang contact bila deleteContactFulfilled = true
        dispatch(getListContacts());
      }
      j++;
    }
  }, [dispatch, deleteContactFulfilled, j]);

  return (
    <>
      <h5 className='my-3'>List Contact</h5>
      <div className="card p-3">
        <div className="row justify-content-center">
          {/* Loading Data Contact Condition */}
          {
            getListContactsLoading && (
              <div className="col-lg-12 col-md-12 col-sm-12 mb-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Data Loading...
                    </h5>
                    <p className="card-text">
                      Please Wait...
                    </p>
                  </div>
                </div>
              </div>
            )
          }
          {/* Fullfilled Data Contact Condition */}
          {
            getListContactsFulfilled && (
              getListContactsFulfilled.map((data) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6 mb-2" key={ data.id }>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          { data.name }
                        </h5>
                        <p className="card-text">
                          Email: { data.email }
                          <br />
                          Phone Number: { data.phoneNumber }
                        </p>
                        <div className="button-action">
                          <button className='btn btn-success'>Edit</button>
                          <button className='btn btn-danger mx-2' value={ data.id } onClick={ handleDeleteContact }>Delete</button>
                        </div>
                        </div>
                    </div>
                  </div>
                );
              })
            )
          }
          {/* Rejected Data Contact Condition */}
          {
            getListContactsRejected && (
              <div className="col-lg-12 col-md-12 col-sm-12 mb-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {
                        getListContactsRejected ? getListContactsRejected : 'Data Not Found!'
                      }
                    </h5>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default CardContactComponent;
