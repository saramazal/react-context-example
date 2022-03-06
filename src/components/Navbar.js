import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <header className="navbar">
    
      <h1>READING LIST</h1>
      <h2>for Web Programmer</h2>
    
    </header>
  );
}
 
export default Navbar;