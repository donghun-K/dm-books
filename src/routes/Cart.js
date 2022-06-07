import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
  let cartData = useSelector((state) => {
    return state.cartData;
  });
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
        {cartData.map((data, i) => {
          return <CartData index={i} data={data} />;
        })}
        {/* <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody> */}
      </Table>
    </div>
  );
}

function CartData({ index, data }) {
  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>{data['name']}</td>
        <td>{data['count']}</td>
        <td>안녕</td>
      </tr>
    </tbody>
  );
}

export default Cart;
