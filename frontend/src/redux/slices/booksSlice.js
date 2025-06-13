import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID";

const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async () => {
    const res = await axios.get('http://localhost:5000/random-book')
    console.log(res.data, 'res.data')
    return res.data
  }
)

const booksSlice = createSlice({
  name:'books',
  initialState,
  reducers:{
    addBook: (state, action) => {
        // state.push(action.payload); // Благодаря Immer, можно мутировать состояние напрямую
        return [...state, action.payload]; // Альтернативный иммутабельный способ
    },
    deleteBook: (state, action) => {
    
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
        state.forEach((book) => {
            if(book.id === action.payload){
                book.isFavorite = !book.isFavorite;
            }
        })
        
      
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if(action.payload?.title && action.payload?.author){
        state.push(createBookWithID(action.payload, 'API'))
      } 
    });
   
  }
  
})



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

export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
