import './App.css';
import { Row, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Card from './components/Card.js';

function App() {
  let [books] = useState(data);
  let navigate = useNavigate();
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>DM BOOKS</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-banner'></div>
              <Container className='book-container'>
                <Row className='book-row'>
                  {books.map((book) => {
                    return <Card book={book} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path='/detail' element={<Detail />} />
        <Route path='*' element={<div>404!</div>} />
      </Routes>
    </div>
  );
}

export default App;
