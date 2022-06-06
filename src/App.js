import './App.css';
import { Row, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Card from './components/Card.js';

function App() {
  let [books] = useState(data);
  let nav = useNavigate();
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand
            href='javascript:void(0)'
            onClick={() => {
              nav('/');
            }}
          >
            DM BOOKS
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                nav('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                nav('/event');
              }}
            >
              Event
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
                  {books.map((book, i) => {
                    return <Card book={book} id={i} key={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        {/* url parameter */}
        <Route path='/detail/:id' element={<Detail books={books} />} />
        {/* nested route */}
        <Route
          path='/event'
          element={
            <div>
              <h1>오늘의 이벤트</h1>
              <Outlet />
            </div>
          }
        >
          <Route path='one' element={<p>1만원 이상 주문 시 배송비 무료!</p>} />
          <Route
            path='two'
            element={<p>네이버페이로 결제 시 2000원 페이백!</p>}
          />
        </Route>
        {/* 404 page */}
        <Route path='*' element={<div>404!</div>} />
      </Routes>
    </div>
  );
}

export default App;
