import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { plusCount, minusCount, removeItem } from './../store/cartSlice.js';

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
            <th>상품 ID</th>
            <th>상품명</th>
            <th>수량</th>
            <th>항목 삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(plusCount(data.id));
                    }}
                  >
                    +
                  </button>
                  {data.count}
                  <button
                    onClick={() => {
                      dispatch(minusCount(data.id));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeItem(data.id));
                    }}
                  >
                    삭제
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
