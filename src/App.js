import './App.css';
import { Row, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Card from './components/Card.js';

function App() {
  let [books] = useState(data);
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>DM BOOKS</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>
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
      </Routes>
    </div>
  );
}

export default App;
