import React from 'react';
import NavbarComponent from '../components/NavbarComponent/navbar.component';
import FormStudentComponent from '../components/FormStudent/formStudent.component';
import TableStudentComponent from '../components/TableStudent/tableStudent.component';

const StudentPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h2>Student Page</h2>
        <hr />
        <FormStudentComponent />
        <TableStudentComponent />
      </div>
    </>
  );
}

export default StudentPage;
