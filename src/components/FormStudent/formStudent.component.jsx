import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, getAllStudents, updateStudent } from '../../actions/student.action';

const FormStudentComponent = () => {
  // > state
  const [nim, setNim] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [id, setId] = useState('');
  

  // > data yang akan dikirim kedalam action
  const insertData = {
    nim, name, email, major
  };

  // > data yang akan dikirimkan kedalam action updateStudent
  const updateData = {
    id, nim, name, email, major
  };

  // > dispatch
  // => digunakan sebagai penghubung component view dengan action dan reducer
  const dispatch = useDispatch();

  // > selector 
  // => digunakan untuk menghandle reducers
  // 1. addContactFulfilled: jika ada perubahan pada statenya (kita ada insert data dan berhasil) akan kita jalankan di useEffect untuk render table ulang 
  // 2. detailStudentFulfilled: digunakan untuk update state "id nim, name, email, jurusan (update data)"
  // 3. updateStudentFulfilled: jika ada perubahan pada statenya (kita ada update data dan berhasil) akan kita jalankan di useEffect untuk render table ulang 
  const { 
    addStudentFulfilled,
    detailStudentFulfilled,
    updateStudentFulfilled
  } = useSelector((state) => state.studentReducer);

  // console.info(detailStudentFulfilled, 'data dari reducer detailStudent');

  // > method untuk handle form
  const handleInsertStudent = (e) => {
    e.preventDefault();

    console.info('Masuk kedalam handle insert data');

    // > jika terdapat state id (proses yang dilakukan adalah update data)
    if (id) {
      // > Update data student
      dispatch(updateStudent(updateData));
    } 
    // > jika tidak ada state id (proses yang dilakukan adalah insert data)
    else {
      // > Tambah data student baru
      dispatch(addStudent(insertData));
    }

    // > set ulang form
    setId('');
    setNim('');
    setName('');
    setEmail('');
    setMajor('');
  };

  // > digunakan untuk update state untuk proses update data
  let x = 0;
  useEffect(() => {
    if (x === 0) {
      if (detailStudentFulfilled) {
        setId(detailStudentFulfilled.id);
        setNim(detailStudentFulfilled.nim);
        setName(detailStudentFulfilled.name);
        setEmail(detailStudentFulfilled.email);
        setMajor(detailStudentFulfilled.major);
      }
    }
  }, [x, detailStudentFulfilled]);

  // > digunakan untuk render table ulang jika ada insert data baru
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      if (addStudentFulfilled || updateStudentFulfilled) {
        console.info('Render data ulang');
        dispatch(getAllStudents());
      }
      i++;
    }
  }, [dispatch, addStudentFulfilled, updateStudentFulfilled, i]);

  return (
    <>
      <h5 className='my-3'>
        {
          id ? `Update Data Student` : 'Add New Student'
        }
      </h5>
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
            <label htmlFor="major" className="form-label">Major</label>
            <input type="text" className="form-control" id="major" placeholder='Your Major' name='major' value={ major } onChange={ (e) => setMajor(e.target.value) } required />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type='submit'>
              {
                id ? 'Update Data Student' : 'Add New Student'
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormStudentComponent;
