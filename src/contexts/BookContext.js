import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: '- Learn JavaScript VISUALLY With Interactive Exercises', author: 'Ivelin Demirov', id: 1},
    {title: '- Secrets of the JavaScript Ninja', author: 'Josip Maras', id: 2},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;