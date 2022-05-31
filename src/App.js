import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
         <NewBookForm />
         <BookList />
         <Footer />
      </BookContextProvider>
    </div>
  );
}

export default App;