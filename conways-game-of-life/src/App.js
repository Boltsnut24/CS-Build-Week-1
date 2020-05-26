import React from 'react';
import './App.scss';
import Grid from './components/grid/Grid.js';

function App() {
  const gridSize = 625; //this is always a square
  let gridArray = new Array(gridSize).fill(0);

  console.log(gridArray.length)
  return (
    <div className="App">
      <Grid size={gridSize} gridArray={gridArray} />
    </div>
  );
}

export default App;
