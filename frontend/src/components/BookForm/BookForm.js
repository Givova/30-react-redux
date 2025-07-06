import { useState } from "react";
import { useDispatch } from "react-redux";
import { setError } from "../../redux/slices/errorSlice";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import createBookWithID from "../../utils/createBookWithID";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomindex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomindex];
    dispatch(addBook(createBookWithID(randomBook, 'random')));
  };

  const handleSubmit = (e) => {
    // dispatch action
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, 'manual')));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError('Please fill in all fields'));
    }
  };

  const handleAddRandomBookViaAPI  = () => {
      dispatch(fetchBook('http://localhost:4000/random-book'))
 
  }
  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
    <button type="button" onClick={handleAddRandomBookViaAPI}>
        Add random book via API
    </button>

      </form>
    </div>
  );
};

export default BookForm;
