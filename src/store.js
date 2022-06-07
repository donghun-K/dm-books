import { configureStore, createSlice } from '@reduxjs/toolkit';

let cartData = createSlice({
  name: 'cartData',
  initialState: [
    { id: 0, name: '개발자가 되기 위해 꼭 알아야 하는 IT 용어', count: 2 },
    { id: 2, name: '만들면서 배우는 파이썬과 40개의 작품들', count: 1 },
  ],
});

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
  },
});