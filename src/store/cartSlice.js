import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: '개발자가 되기 위해 꼭 알아야 하는 IT 용어', count: 2 },
    { id: 2, name: '만들면서 배우는 파이썬과 40개의 작품들', count: 1 },
  ],
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
      if (item.count > 0) {
        item.count--;
      }
    },
    updateCart(state, action) {
      let item = state.find((item) => {
        return item.id === action.payload.id;
      });
      if (item === undefined) {
        state.push({
          id: action.payload.id,
          name: action.payload.title,
          count: 1,
        });
      } else {
        item.count++;
      }
    },
  },
});

export let { plusCount, minusCount, updateCart } = cart.actions;

export default cart;
