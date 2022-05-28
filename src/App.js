import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './Detail.js';

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
        <Route path='/about' element={<div>어바웃페이지</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={props.book['src']} alt='' className='book-img' />
      <h4 className='book-name'>{props.book['title']}</h4>
      <p className='book-description'>{props.book['content']}</p>
    </Col>
  );
}

export default App;
