import './game-board.styles.scss';
import { useState } from 'react';

function GameBoard(){
    const [state, setState] = useState({
        //[1,2,3]
        //[4,5,6]
        //[7,8,9]
         slot1: 0,
         slot2: 0,
         slot3: 0,
         slot4: 0,
         slot5: 0,
         slot6: 0,
         slot7: 0,
         slot8: 0,
         slot9: 0
    })
    
    function handleUserInput () { 

    }

    return (
        <div className='backboard'>
            <div id='s1'>{state.slot1}</div>
            <div id='s2'>{state.slot2}</div>
            <div id='s3'>{state.slot3}</div>
            <div id='s4'>{state.slot4}</div>
            <div id='s5'>{state.slot5}</div>
            <div id='s6'>{state.slot6}</div>
            <div id='s7'>{state.slot7}</div>
            <div id='s8'>{state.slot8}</div>
            <div id='s9'>{state.slot9}</div>
        </div>
    )
}

export default GameBoard;