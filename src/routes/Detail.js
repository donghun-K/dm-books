import { Col, Row, Container, Nav } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateCart } from './../store/cartSlice.js';
import { useDispatch } from 'react-redux';
import { addWatched } from './../store/watchedSlice.js';

function Detail(props) {
  let { id } = useParams();
  let book = props.books.find((book) => {
    return book.id === Number(id);
  });

  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState('');

  let dispatch = useDispatch();

  let nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
    };
  }, []);
  useEffect(() => {
    dispatch(addWatched(book.id));
  });

  return (
    <Container className={`detail-container start ${fade}`}>
      <Row>
        <Col md='6'>
          <img src={book.src} width='100%' alt='book-img' />
        </Col>
        <Col md='6'>
          <h4>{book.title}</h4>
          <p>{book.content}</p>
          <p>{book.price}</p>
          <button
            onClick={() => {
              dispatch(updateCart(book));
              nav('/cart');
            }}
            className='btn btn-danger'
          >
            주문하기
          </button>
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
  let [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
