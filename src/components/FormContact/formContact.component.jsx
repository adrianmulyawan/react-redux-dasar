import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListContacts, insertNewContact } from '../../actions/contact.action';

const FormContactComponent = () => {
  // > state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // > data yang akan dikirim ke action insetNewContact
  const data = {
    name,
    email,
    phoneNumber
  };

  // > dispatch
  // => digunakan untuk mengirimkan data kedalam action
  const dispatch = useDispatch();

  // > useSelector
  // => kita manfaatkan untuk render ulang card
  // => apabila didalam reducers ini telah terdapat data baru
  // => kita implementasikan menggunakan useEffect
  const { insertNewContactFulfilled } = useSelector((state) => state.contactReducer);

  // > handler form
  const handleInputContact = (event) => {
    console.info('1. Masuk kedalam handle ketika form disubmit');

    event.preventDefault();

    // > jalankan insertNewContact disini
    // => dengan menggunakan dispatch
    dispatch(insertNewContact(data));

    // > balikan nilai state
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  // > useEffect untuk getDataContacts
  // => dijalankan setelah berhasil insert data
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      // > jika 'insertNewContactFulfilled' = true (ada perubahan)
      // => update datanya
      if (insertNewContactFulfilled) {
        console.info('1. Render ulang data');
        dispatch(getListContacts());
      }
      i++
    }
  }, [insertNewContactFulfilled, dispatch, i]);

  return (
    <>
      <h5 className='my-3'>Add New Contact</h5>
      <div className="card p-3">
        <form onSubmit={ handleInputContact }>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Fullname</label>
            <input type="text" className="form-control" id="name" name='name' placeholder='Your Fullname' onChange={ (e) => setName(e.target.value) } value={ name } required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' placeholder='Your Email' onChange={ (e) => setEmail(e.target.value) } value={ email } required />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' placeholder='Your Phone Number' onChange={ (e) => setPhoneNumber(e.target.value) } value={ phoneNumber } required />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormContactComponent;
