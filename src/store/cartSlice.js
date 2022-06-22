import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    plusCount(state, action) {
      let item = state.find((item) => {
        return item.id === action.payload;
      });
      item.count++;
    },
    minusCount(state, action) {
      let item = state.find((item) => {
        return item.id === action.payload;
      });
      if (item.count > 1) {
        item.count--;
        // 남은 수량이 1일 때 minusCount를 호출했을 경우 항목 삭제
      } else {
        // 같은 slice의 함수를 호출하기 위해 caseReducers 사용
        cart.caseReducers.removeItem(state, item.id);
      }
    },
    updateCart(state, action) {
      let item = state.find((item) => {
        return item.id === action.payload.id;
      });
      // cart에 동일한 상품이 존재하지 않는 경우
      if (item === undefined) {
        state.push({
          id: action.payload.id,
          name: action.payload.title,
          count: 1,
        });
        // cart에 이미 동일한 상품이 존재하는 경우
      } else {
        item.count++;
      }
    },
    removeItem(state, id) {
      let itemIndex = state.findIndex((item) => {
        return item.id === id;
      });
      state.splice(itemIndex, 1);
    },
  },
});

export let { plusCount, minusCount, updateCart, removeItem } = cart.actions;

export default cart;
