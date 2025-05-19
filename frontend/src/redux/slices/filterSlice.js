import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // you can mutate state thanks to Immer lubrary
      state.title = action.payload;
    },
    resetFilter: (state) => {
      return { ...initialState };
    },
    
  },
});

// const setTitleFilter = filterSlice.actions.setTitleFilter;

export const { setTitleFilter, resetFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
