import { Col } from 'react-bootstrap';

function Card(props) {
  return (
    <Col sm>
      <img src={props.book['src']} alt='' className='book-img' />
      <h4 className='book-name'>{props.book['title']}</h4>
      <p className='book-description'>{props.book['content']}</p>
    </Col>
  );
}

export default Card;
