import React, { useState } from 'react';

const FormContactComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const data = {
    name,
    email,
    phoneNumber
  };

  const handleInputContact = (event) => {
    event.preventDefault();

    console.info(data);
  }

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
