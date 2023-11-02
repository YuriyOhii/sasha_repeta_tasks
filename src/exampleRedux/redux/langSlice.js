import { createSlice } from '@reduxjs/toolkit';

const initLang = 'en';

const langSlice = createSlice({
  name: 'lang',
  initialState: initLang,
  reducers: {
    setLang(state, action) {
      state = action.payload;
    },
  },
});

export const langReducer = langSlice.reducer;
export const { setLang } = langSlice.actions;
