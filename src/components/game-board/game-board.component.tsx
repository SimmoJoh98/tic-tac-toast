import './game-board.styles.scss';
import { useState } from 'react';
import React from 'react';

function GameBoard(){
    const [state, setState] = useState({
        //[1,2,3]
        //[4,5,6]
        //[7,8,9]
         playerTurn: 1,
         player1: 1,
         player2: 2,
         grid: [0,0,0,0,0,0,0,0,0],
         winConditions:[
             []
         ]
    })
    
    function handleUserInput () { 
      //console.log('Clicked!');
        
    }

    return (
        <div className='gameboard'>
            <div className='backboard'>
                <div onClick={handleUserInput} id='s1'>{state.grid[0]}</div>
                <div id='s2'>{state.grid[1]}</div>
                <div id='s3'>{state.grid[2]}</div>
                <div id='s4'>{state.grid[3]}</div>
                <div id='s5'>{state.grid[4]}</div>
                <div id='s6'>{state.grid[5]}</div>
                <div id='s7'>{state.grid[6]}</div>
                <div id='s8'>{state.grid[7]}</div>
                <div id='s9'>{state.grid[8]}</div>
            </div>
            <h1 id='turn'>It's player {state.playerTurn}'s turn</h1>
        </div>
    )
}

export default GameBoard;