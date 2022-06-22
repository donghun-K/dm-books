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
      <Row className='detail-row'>
        <Col md='5'>
          <img src={book.src} width='100%' alt='book-img' />
        </Col>
        <Col md='5' className='detail-info'>
          <div className='detail-title_box'>
            <h4 className='detail-title'>{book.title}</h4>
            <p className='detail-desc'>{book.content}</p>
          </div>
          <h5 className='detail-price'>{book.price}</h5>

          <div className='detail-btn_box'>
            <input
              className='detail-input'
              type='number'
              min='1'
              max='5'
            ></input>
            <button
              onClick={() => {
                dispatch(updateCart([book, 1]));
                nav('/cart');
              }}
              className='btn btn-danger'
            >
              주문하기
            </button>
            <button
              onClick={() => {
                let quantity = document.querySelector('.detail-input').value;
                dispatch(updateCart([book, quantity]));
                nav('/cart');
              }}
              className='btn btn-danger'
            >
              장바구니 담기
            </button>
          </div>
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
