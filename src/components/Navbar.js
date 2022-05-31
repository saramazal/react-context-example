import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <header className="navbar">
      <h1>My Reading List</h1>
      <h2>Currently you have {books.length} books to get through...</h2>
    </header>
  );
}
 
export default Navbar;