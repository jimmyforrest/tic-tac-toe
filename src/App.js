import logo from './logo.svg';
import './App.css';
import './style.css'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;

function Square({value, handleClick}) {
  return <button className='square' onClick={handleClick}>{value}</button>
}

export default function Borad() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [nextIsX, setNextIsX] = useState(true)
  function handleClick(i) {
    const nextSquares = squares.slice()
    if (nextIsX) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setNextIsX(!nextIsX)
    setSquares(nextSquares)
  }

  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} handleClick={()=>{handleClick(0)}}></Square>
        <Square value={squares[1]} handleClick={()=>{handleClick(1)}}></Square>
        <Square value={squares[2]} handleClick={()=>{handleClick(2)}}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} handleClick={()=>{handleClick(3)}}></Square>
        <Square value={squares[4]} handleClick={()=>{handleClick(4)}}></Square>
        <Square value={squares[5]} handleClick={()=>{handleClick(5)}}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} handleClick={()=>{handleClick(6)}}></Square>
        <Square value={squares[7]} handleClick={()=>{handleClick(7)}}></Square>
        <Square value={squares[8]} handleClick={()=>{handleClick(8)}}></Square>
      </div>
    </>
  )
}

function Game() {

}


