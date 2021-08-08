import './sign-in.styles.scss';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Auth () {
    const [data, setData] = useState({Username: '', Password:''})
    let history = useHistory();
    let url = 'http://localhost:3001/SignIn';

   const handleSubmit = () => {
    if(data.Username && data.Password !== undefined){
        axios.post(url, {
            Username: data.Username,
            Password: data.Password
        }).then(
            
        )
    }
    else{
        alert('Fields Cannot Be Blank!')
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