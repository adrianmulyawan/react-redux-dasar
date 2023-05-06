import React, { useState } from 'react';

const FormStudentComponent = () => {
  const [nim, setNim] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jurusan, setJurusan] = useState('');

  const handleInsertStudent = (e) => {
    e.preventDefault();

    console.info(nim, name, email, jurusan, '=> data students');
  };

  return (
    <>
      <h5 className='my-3'>Add New Student</h5>
      <div className="card p-3">
        <form onSubmit={ handleInsertStudent }>
          <div className="mb-3">
            <label htmlFor="nim" className="form-label">NIM</label>
            <input type="text" className="form-control" id="nim" placeholder='Your NIM' name='nim' value={ nim } onChange={ (e) => setNim(e.target.value) } required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Fullname</label>
            <input type="text" className="form-control" id="name" placeholder='Your Fullname' name='name' value={ name } onChange={ (e) => setName(e.target.value) } required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder='Your Email' name='email' value={ email } onChange={ (e) => setEmail(e.target.value) } required />
          </div>
          <div className="mb-3">
            <label htmlFor="jurusan" className="form-label">Major</label>
            <input type="text" className="form-control" id="jurusan" placeholder='Your Major' name='jurusan' value={ jurusan } onChange={ (e) => setJurusan(e.target.value) } required />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type='submit'>
              Save Student
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormStudentComponent;
