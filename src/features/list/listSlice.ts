import { createSlice } from '@reduxjs/toolkit';

interface ListState {
  items: string[];
}

const initialState: ListState = {
  items: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state) => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      state.items.unshift(randomColor);
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
