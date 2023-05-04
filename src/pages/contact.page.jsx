import React from 'react';
import NavbarComponent from '../components/NavbarComponent/navbar.component';
import CardContactComponent from '../components/CardContact/cardContact.component';

const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h2>Contact Page</h2>
        <hr />
        <CardContactComponent />
      </div>
    </>
  );
}

export default ContactPage;
