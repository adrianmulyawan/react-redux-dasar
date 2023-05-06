import React from 'react';

const TableStudentComponent = () => {
  return (
    <>
      <h5 className='my-3'>Data Students</h5>
      <div className="card p-3">
      <table class="table table-responsive table-bordered">
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
          <tr>
            <th scope="row" className='text-center'>1</th>
            <td className='text-center'>15523115</td>
            <td className='text-center'>Adrian Mulyawan</td>
            <td className='text-center'>adrianmulyawan@gmail.com</td>
            <td className='text-center'>Computer Science</td>
            <td className="text-center">
              <button class="badge bg-success">Edit</button>
              <button class="badge bg-danger mx-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}

export default TableStudentComponent;
