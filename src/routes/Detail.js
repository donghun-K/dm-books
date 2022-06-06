import { Col, Row, Container, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Detail(props) {
  let { id } = useParams();
  let book = props.books.find((book) => {
    return book.id === Number(id);
  });
  let [tab, setTab] = useState(0);

  return (
    <Container>
      <Row>
        <Col md='6'>
          <img src={book.src} width='100%' alt='book-img' />
        </Col>
        <Col md='6'>
          <h4>{book.title}</h4>
          <p>{book.content}</p>
          <p>{book.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </Col>
      </Row>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey='link0'
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            setTab(1);
          }}
        >
          <Nav.Link eventKey='link1'>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            setTab(2);
          }}
        >
          <Nav.Link eventKey='link2'>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </Container>
  );
}

function TabContent({ tab }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
}

export default Detail;
