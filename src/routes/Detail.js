import { Col, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  let book = props.books.find((book) => {
    return book.id === Number(id);
  });
  return (
    <Container>
      <Row>
        <Col md='6'>
          <img
            src='http://image.yes24.com/goods/109711067/XL'
            width='100%'
            alt='book-img'
          />
        </Col>
        <Col md='6'>
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
