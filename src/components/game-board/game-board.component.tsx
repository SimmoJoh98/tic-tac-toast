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
         winCons: [
             [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
         ]
    })
    
    const [boardState, setBoardState] = useState(
        [0,0,0,0,0,0,0,0,0]
    )
    
    for(let i=0; i<state.winCons.length; i++){
        let winLine = state.winCons[i];
        let s1 = winLine[0];
        let s2 = winLine[1];
        let s3 = winLine[2];
        if(boardState[s1] !== 0 && boardState[s1] === boardState[s2] && boardState[s2] === boardState[s3]){
            alert(`Player ${boardState[s1]} wins!`)
            break;
        }
    }

    const Cell = ({gridIndex}) => {
        const handleUserInput = () => {
            //console.log(`Clicked ${gridIndex}`)

            if(boardState[gridIndex] === 0){
                let board = Array.from(boardState)
                board[gridIndex] = state.playerTurn;
                setBoardState(board);
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