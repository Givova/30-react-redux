import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name:'books',
  initialState,
  reducers:{
    addBook: (state, action) => {
        // return [...state, action.payload]; так мы делали, можно по другому.
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
    //   const index =  state.findIndex((book) => book.id === action.payload);
    //   if (index !== -1){
    //     state.splice(index, 1);
    //   }
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
        state.forEach((book) => {
            if(book.id === action.payload){
                book.isFavorite = !book.isFavorite;
            }
        })
        
        //   const book = state.find((book) => book.id === action.payload);
/////////////////////////////////////////////
    //   return state.map((book) =>
    //     book.id === action.payload
    //       ? { ...book, isFavorite: !book.isFavorite }
    //       : book
    //   );
    }

  }
})


export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
