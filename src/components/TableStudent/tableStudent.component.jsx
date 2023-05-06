import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, getAllStudents } from '../../actions/student.action';

const TableStudentComponent = () => {
  // > useDispatch
  // => Instansiasi dispatch dan tampung kedalam variable 'dispatch'
  // => kita gunakan sebagai penghubung view component ke action dan reducers
  const dispatch = useDispatch();

  // > selector 
  // => kita gunakan untuk menghandle reducers
  // # reducer digunakan untuk mengolah state yang berasal dari store
  // # store digunakan sebagai wadah penampung state
  const {
    getAllStudentsLoading,
    getAllStudentsFulfilled,
    getAllStudentsRejected,
    deleteStudentFulfilled
  } = useSelector((state) => state.studentReducer);


  // > useEffect untuk menjalankan action getAllStudents
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      console.info('Masuk kedalam useEffect di component tableStudent');
      dispatch(getAllStudents());
      i++;
    }
  }, [dispatch, i]);

  // > handler delete student
  const handleDeleteStudent = (event) => {
    const idStudent = event.target.value;

    console.info('Masuk kedalam handle hapus data student');

    const confirmation = window.confirm('Are you sure?');

    if (confirmation === true) {
      dispatch(deleteStudent(idStudent));
      alert('Success delete student');
    }
  };

  // > useEffect untuk render data student bila data berhasil dihapus
  let j = 0;
  useEffect(() => {
    if (j === 0) {
      // => jika state deleteStudentFulfilled != false
      if (deleteStudentFulfilled) {
        console.info('Render ulang data');
        // => render ulang datanya
        dispatch(getAllStudents());
      }
      j++;
    }
  }, [dispatch, deleteStudentFulfilled, j]);

  return (
    <>
      <h5 className='my-3'>Data Students</h5>
      <div className="card p-3">
      <table className="table table-responsive table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center'>No</th>
            <th scope="col" className='text-center'>NIM</th>
            <th scope="col" className='text-center'>Fullname</th>
            <th scope="col" className='text-center'>Email</th>
            <th scope="col" className='text-center'>Major</th>
            <th scope="col" className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Jika reducer = loading */}
          {
            getAllStudentsLoading && (
              <tr>
                <td className='text-center' colSpan={ 6 }>Data Loading...</td>
              </tr>
            )
          }
          {/* Jika reducer = fulfilled */}
          {
            getAllStudentsFulfilled && (
              getAllStudentsFulfilled.map((student, index) => {
                return (
                  <tr key={ student.id }>
                    <th scope="row" className='text-center'>
                      { index += 1 }
                    </th>
                    <td className='text-center'>
                      { student.nim }
                    </td>
                    <td className='text-center'>
                      { student.name }
                    </td>
                    <td className='text-center'>
                      { student.email }
                    </td>
                    <td className='text-center'>
                      { student.major }
                    </td>
                    <td className="text-center">
                      <button className="badge bg-success">Edit</button>
                      <button className="badge bg-danger mx-2" value={ student.id } onClick={ handleDeleteStudent }>Delete</button>
                    </td>
                  </tr>
                )
              })
            )
          }
          {/* Jika reducers = rejected */}
          {
            getAllStudentsRejected && (
              <tr>
                <td className='text-center' colSpan={ 6 }>{ getAllStudentsRejected ? getAllStudentsRejected : 'Data Loading...'}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </>
  );
}

export default TableStudentComponent;
