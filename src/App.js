import React, { useState } from 'react';
import QuoteBox from './quoteBox/QuoteBox'
import './App.css';


function App() {
  const [quote, setQuote] = useState('This is the first quote')
  const [author, setauthor] = useState('Maxim Toon')

  const handleNewQuote= (event) => {
    event.preventDefault()
    console.log('yoooo, who clicked me')
  }

  return (
   

    <div className="App">
      <QuoteBox quote={quote} author={author} handleNewQuote={handleNewQuote}/>
      </div>
    

  );
}

export default App;
