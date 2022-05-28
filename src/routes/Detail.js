import { Col, Row, Container } from 'react-bootstrap';

function Detail() {
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
          <h4>상품명</h4>
          <p>상품설명</p>
          <p>10000원</p>
          <button className='btn btn-danger'>주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
