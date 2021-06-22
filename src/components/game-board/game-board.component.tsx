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
    
    const Cell = ({gridIndex}) => {
        const handleUserInput = () => {
            console.log(`Clicked ${gridIndex}`)
        }
        return <div id={gridIndex} onClick = {handleUserInput}>{state.grid[gridIndex]}</div>
    }
    

    return (
        <div className="background">
            <div className='gameboard'>
                <div className='backboard'>
                    <Cell gridIndex={0}/>
                    <Cell gridIndex={1}/>
                    <Cell gridIndex={2}/>
                    <Cell gridIndex={3}/>
                    <Cell gridIndex={4}/>
                    <Cell gridIndex={5}/>
                    <Cell gridIndex={6}/>
                    <Cell gridIndex={7}/>
                    <Cell gridIndex={8}/>
                </div>
                <h1 id='turn'>It's player {state.playerTurn}'s turn</h1>
            </div>
        </div>
    )
}

export default GameBoard;