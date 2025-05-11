import * as a from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (id) => {
  return {
    type: a.DELETE_BOOK,
    payload: id,
  };
};

export const toggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  };
};

//   Неявный возврат объекта

// export const toggleFavorite = (id) => ({
//   type: a.TOGGLE_FAVORITE,
//   payload: id,
// })
