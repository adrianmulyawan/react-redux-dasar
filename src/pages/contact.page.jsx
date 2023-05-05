import React from 'react';
import NavbarComponent from '../components/NavbarComponent/navbar.component';
import CardContactComponent from '../components/CardContact/cardContact.component';
import FormContactComponent from '../components/FormContact/formContact.component';

const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h2>Contact Page</h2>
        <hr />
        <FormContactComponent />
        <CardContactComponent />
      </div>
    </>
  );
}

export default ContactPage;
