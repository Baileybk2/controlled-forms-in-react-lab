import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <label htmlFor="title">Title: </label>
          <input id="title" name="title" value="title" />

          <label htmlFor="author">Author: </label>
          <input id="author" name="author" value="author" />
          <button type="submit">Add book</button>
        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}</div>
      </div>
      ;
    </>
  );
};

export default Bookshelf;
