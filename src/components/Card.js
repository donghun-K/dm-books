import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  let nav = useNavigate();
  return (
    <Col sm>
      <img
        src={props.book['src']}
        alt=''
        className='book-img'
        onClick={() => {
          nav(`/detail/${props.id}`);
        }}
      />
      <h4
        className='book-name'
        onClick={() => {
          nav(`/detail/${props.id}`);
        }}
      >
        {props.book['title']}
      </h4>
      <p className='book-description'>{props.book['content']}</p>
    </Col>
  );
}

export default Card;
