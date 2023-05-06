import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home.page';
import NotFoundPage from './pages/notFound.page';
import ContactPage from './pages/contact.page';
import StudentPage from './pages/student.page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
          <Route path='/student' element={ <StudentPage /> } />
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
