import './sign-in.styles.scss';
import React, {useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function Auth () {
    const [data, setData] = useState({Username: '', Password:''})
    let history = useHistory();


   const handleSubmit = () => {
    if(data.Username && data.Password !== undefined){
        history.push('/game-page')
    }
   }

    return(
        <div className="container">
            <input className="Username" placeholder='Username' type='text' value={data.Username} onChange={e => setData({ ...data, Username: e.target.value})} />
            <input className="Password" placeholder='Password' type='text' value={data.Password} onChange={e => setData({ ...data, Password: e.target.value})} />
            <button id="SignIn" onClick={handleSubmit} type="submit">Sign In</button>
        </div>
    )
}

export default Auth;