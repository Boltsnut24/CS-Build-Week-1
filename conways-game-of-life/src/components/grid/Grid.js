import React from 'react';
import Cell from './Cell.js';
import "./Grid.scss";

export default function Grid(props){

  return(
    <div className = "grid">
      {
      props.gridArray.map(cell =>{
        return <Cell data={cell}/>
      })
    }
    </div>
  )
}