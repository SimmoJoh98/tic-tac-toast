import './game-board.styles.scss';
import { useState, useEffect } from 'react';
import React from 'react';

function GameBoard(){
    const [state, setState] = useState({
        //[1,2,3]
        //[4,5,6]
        //[7,8,9]
         playerTurn: 1,
         player1: 1,
         player2: 2,
    })
    
    const [boardState, setBoardState] = useState(
        [0,0,0,0,0,0,0,0,0]
    )

    const Cell = ({gridIndex}) => {
        const handleUserInput = () => {
            //console.log(`Clicked ${gridIndex}`)
            if(boardState[gridIndex] === 0){
                let board = Array.from(boardState)
                board[gridIndex] = state.playerTurn
                setBoardState(board)
                setState({...state, playerTurn: state.playerTurn === 1 ? 2 : 1})
            }
        }
        return <div className="box" onClick = {handleUserInput}>{boardState[gridIndex]}</div>
    }
    

    return (
        <div className="background">
            <div className='gameboard'>
                <table className='backboard'>
                    <tr id="row1">
                        <td><Cell gridIndex={0}/></td>
                        <td><Cell gridIndex={1}/></td>
                        <td><Cell gridIndex={2}/></td>
                    </tr>
                    <tr id="row2">
                        <td><Cell gridIndex={3}/></td>
                        <td><Cell gridIndex={4}/></td>
                        <td><Cell gridIndex={5}/></td>
                    </tr>
                    <tr id="row3">
                        <td><Cell gridIndex={6}/></td>
                        <td><Cell gridIndex={7}/></td>
                        <td><Cell gridIndex={8}/></td>
                    </tr>
                </table>

                <h1 id='turn'>It's player {state.playerTurn}'s turn</h1>
            </div>
        </div>
    )
}

export default GameBoard;