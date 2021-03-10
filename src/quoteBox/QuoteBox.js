import './QuoteBox.css'

const QuoteBox = ({ quote, author, handleNewQuote })=> {
  return(
    <div id='quote-box'>
      <h2 id='text'>{quote}</h2>
      <h5 id='author'>{author}</h5>
      <button onClick={handleNewQuote}>new quote</button>
    </div>
  )
}

export default QuoteBox