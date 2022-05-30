import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let [num, setNum] = useState('');
  useEffect(() => {
    if (isNaN(num) === true) {
      alert('글자 ㄴ');
    }
  }, [num]);
  let { id } = useParams();
  let book = props.books.find((book) => {
    return book.id === Number(id);
  });
  return (
    <Container>
      <Row>
        <Col md='6'>
          <img src={book.src} width='100%' alt='book-img' />
        </Col>
        <Col md='6'>
          <input
            type='text'
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4>{book.title}</h4>
          <p>{book.content}</p>
          <p>{book.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
