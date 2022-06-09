import { createSlice } from '@reduxjs/toolkit';

let watched = createSlice({
  name: 'watched',
  initialState: [],
  reducers: {
    addWatched(state, action) {
      if (state.includes(action.payload) === false) {
        state.push(action.payload);
      }
      localStorage.setItem('watched', JSON.stringify(state));
    },
  },
});

export let { addWatched } = watched.actions;
export default watched;
