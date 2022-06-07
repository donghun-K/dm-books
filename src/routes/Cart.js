import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { plusCount, minusCount, removeItem } from './../store/cartSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faX,
  faCirclePlus,
  faCircleMinus,
} from '@fortawesome/free-solid-svg-icons';

function Cart() {
  let cart = useSelector((state) => {
    return state.cart;
  });
  let dispatch = useDispatch();
  return (
    <div>
      <Table>
        <colgroup>
          <col width='15%' />
          <col width='40%' />
          <col width='25%' />
          <col width='10%' />
        </colgroup>
        <thead>
          <tr>
            <th className='cart-table-align_center' scope='col'>
              상품 ID
            </th>
            <th scope='col'>상품명</th>
            <th className='cart-table-align_center' scope='col'>
              수량
            </th>
            <th className='cart-table-align_center' scope='col'>
              항목 삭제
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((data, i) => {
            return (
              <tr key={i}>
                <td className='cart-table-align_center'>{data.id}</td>
                <td>{data.name}</td>
                <td className='cart-table-align_center'>
                  <span
                    onClick={() => {
                      dispatch(plusCount(data.id));
                    }}
                    className='cart-btn cart-count-btn'
                  >
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </span>
                  <span className='cart-count'>{` ${data.count} `}</span>
                  <span
                    onClick={() => {
                      dispatch(minusCount(data.id));
                    }}
                    className='cart-btn cart-count-btn'
                  >
                    <FontAwesomeIcon icon={faCircleMinus} />
                  </span>
                </td>
                <td className='cart-table-align_center'>
                  <span
                    onClick={() => {
                      dispatch(removeItem(data.id));
                    }}
                    className='cart-btn cart-count-btn'
                  >
                    <FontAwesomeIcon icon={faX} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
