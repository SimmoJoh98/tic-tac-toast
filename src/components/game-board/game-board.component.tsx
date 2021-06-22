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
         grid: [0,0,0,0,0,0,0,0,0]
    })
    
   

    return (
        <div className="background">
            <div className='gameboard'>
                <div className='backboard'>
                    <div onClick={} id='s1'>{state.grid[0]}</div>
                    <div onClick={} id='s2'>{state.grid[1]}</div>
                    <div onClick={} id='s3'>{state.grid[2]}</div>
                    <div onClick={} id='s4'>{state.grid[3]}</div>
                    <div onClick={} id='s5'>{state.grid[4]}</div>
                    <div onClick={} id='s6'>{state.grid[5]}</div>
                    <div onClick={} id='s7'>{state.grid[6]}</div>
                    <div onClick={} id='s8'>{state.grid[7]}</div>
                    <div onClick={} id='s9'>{state.grid[8]}</div>
                </div>
                <h1 id='turn'>It's player {state.playerTurn}'s turn</h1>
            </div>
        </div>
    )
}

export default GameBoard;