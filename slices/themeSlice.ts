import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'setting',
  initialState: { value: {} },
  reducers: {
    changeSetting: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice;
export const { changeSetting } = themeSlice.actions;
