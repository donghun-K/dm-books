import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  let nav = useNavigate();
  return (
    <Col sm className='card-container'>
      <div className='card-img-box'>
        <img
          src={props.book['src']}
          alt=''
          className='card-img'
          onClick={() => {
            nav(`/detail/${props.id}`);
          }}
        />
      </div>
      <h4
        className='card-name'
        onClick={() => {
          nav(`/detail/${props.id}`);
        }}
      >
        {props.book['title']}
      </h4>
      <p className='card-description'>{props.book['content']}</p>
    </Col>
  );
}

export default Card;
