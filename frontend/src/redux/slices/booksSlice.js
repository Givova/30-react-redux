import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = {
  books: [],
  isLoadingViaAPI: false,

};

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
   try {
      const res = await axios.get(url)
      return res.data
   } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      // throw error  // можно создавать и так. Создаем ошибку, чтобы промис уходил в rejected, а не в fullfield.
      return thunkAPI.rejectWithValue(error.message) // можно так. Создаем ошибку, чтобы промис уходил в rejected, а не в fullfield.
   }
    
  }
)

const booksSlice = createSlice({
  name:'books',
  initialState,
  reducers:{
    addBook: (state, action) => {
        state.books.push(action.payload); // Благодаря Immer, можно мутировать состояние напрямую
        // return [...state.books, action.payload]; // Альтернативный иммутабельный способ
    },
    deleteBook: (state, action) => {
      return {...state, books: state.books.filter((book) => book.id !== action.payload)}
    },
    toggleFavorite: (state, action) => {
        state.books.forEach((book) => {
            if(book.id === action.payload){
                book.isFavorite = !book.isFavorite;
            }
        });
        
      
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state, action) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      if(action.payload?.title && action.payload?.author){
        state.books.push(createBookWithID(action.payload, 'API'))
      } 
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.isLoadingViaAPI = false;
    });
  },
});



export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
// export const thunkFunction = async (dispatch, getState) => {
//     try {
//       const res = await axios.get('http://localhost:4000/random-book')
//         if (res?.data?.title && res?.data?.author) {
//           dispatch(addBook(createBookWithID(res.data, 'API'))) 
//         } 
//     } catch (error) {
//       console.log(error, 'error featchihg random-book') 
//     }
    
//   }

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI;
export default booksSlice.reducer;
