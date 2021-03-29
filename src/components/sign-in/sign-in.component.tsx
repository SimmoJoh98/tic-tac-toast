import './sign-in.styles.css';
import {useState} from 'react';
import Axios from 'axios';

function Auth () {
    const [state, setState] = useState({Username: '', Password:''})

    const handleClick = () => {
        
    }





    return(
        <div>
            <input placeholder="Username"/>
            <input placeholder="Password"/>
            <button onClick={handleClick} type="submit">Login</button>
        </div>
    )
}


export default Auth;