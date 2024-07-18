import { useState } from "react";

const Bookshelf = () => {
  // state variables
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  // event handlers
  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  // return statement
  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />

            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Submit book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
