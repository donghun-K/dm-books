import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {
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
      <Container className='product-container'>
        <Row className='product-row'>
          <Col sm>
            <img
              src='http://image.yes24.com/goods/109711067/XL'
              alt=''
              className='product-img'
            />
            <h4 className='product-name'>상품명</h4>
            <p className='product-description'>상품설명</p>
          </Col>
          <Col sm>
            <img
              src='http://image.yes24.com/goods/91433923/XL'
              alt=''
              className='product-img'
            />
            <h4 className='product-name'>상품명</h4>
            <p className='product-description'>상품설명</p>
          </Col>
          <Col sm>
            <img
              src='http://image.yes24.com/goods/107490270/XL'
              alt=''
              className='product-img'
            />
            <h4 className='product-name'>상품명</h4>
            <p className='product-description'>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
