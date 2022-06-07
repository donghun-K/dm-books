import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { plusCount, minusCount } from './../store.js';

function Cart() {
  let cart = useSelector((state) => {
    return state.cart;
  });
  let dispatch = useDispatch();
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((data, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data['name']}</td>
                <td>{data['count']}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(plusCount(i));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(minusCount(i));
                    }}
                  >
                    -
                  </button>
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
