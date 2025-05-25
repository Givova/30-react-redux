import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  title: "",
  author: "",
  onlyFavorite: false
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
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilter: (state) => {
      return { ...initialState };
    },
  },
});

// const setTitleFilter = filterSlice.actions.setTitleFilter;

export const { setTitleFilter, resetFilter, setAuthorFilter, setOnlyFavoriteFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
