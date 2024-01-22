import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

const TURNS = {
  X: (<div className="cross"><div className="bar"></div><div className="bar"></div></div>),
  O: (<div className="circle"><div className="dot"></div></div>)
}
const Box = ({ child, isVisible ,updateBoard, index}) => {
  const className = `box ${isVisible ? 'visible' : ''}`
  return (
    <div onClick ={updateBoard(index)} className={className}>
      {child}
    </div>
  )

}

const Board = ({ childs }) => {
  return (
    <div className="board">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {childs}
      {/* <Box child={TURNS.X} />
      <Box child={childs[1]} />
      <Box child={childs[2]} />
      <Box child={childs[3]} />
      <Box child={childs[4]} />
      <Box child={childs[5]} />
      <Box child={childs[6]} />
      <Box child={childs[7]} />
      <Box child={childs[8]} /> */}
    </div>
  )
}

function App() {
  const updateBoard = () => {
    
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
  }
  const [turn, setTurn] = useState(TURNS.X)
  const childs = (Array(9).fill(null)).map((n, index) => {
    return (
      <Box child={n}
      key={index}
      index={index}
      updateBoard={updateBoard}
      >
      </Box >
    )
  })
  
  return (
    <div className="container">
      <Board childs={childs} >
      </Board>


      <div className="turn">
        <Box
          isVisible={turn === TURNS.X}
          child={TURNS.X}>
        </Box>
        <Box
          isVisible={turn === TURNS.O}
          child={TURNS.O}>
        </Box>
      </div>
    </div>
  )
}

export default App
