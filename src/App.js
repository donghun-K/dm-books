import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [books] = useState(data);
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>DM BOOKS</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-banner'></div>
      <Container className='book-container'>
        <Row className='book-row'>
          {books.map((book, i) => {
            return <Book book={book} i={i} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Book(props) {
  return (
    <Col sm>
      <img src='' alt='' className='book-img' />
      <h4 className='book-name'>book</h4>
      <p className='book-description'>상품설명</p>
    </Col>
  );
}

export default App;
