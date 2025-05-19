import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // you can mutate state thanks to Immer lubrary
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilter: (state) => {
      return { ...initialState };
    },
  },
});

// const setTitleFilter = filterSlice.actions.setTitleFilter;

export const { setTitleFilter, resetFilter, setAuthorFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
