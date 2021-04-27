import './sign-in.styles.css';
import React, {useState} from 'react';
import axios from 'axios';

function Auth () {
    const [data, setData] = useState({Username: '', Password:''})
    
   const handleSubmit = () => {
    //epic dubbugging skills below. v
    //console.log(data.Username);
    //console.log(data.Password);

    let userData = data;

   }

    return(
        <div>
            <input placeholder='Username' type='text' value={data.Username} onChange={e => setData({ ...data, Username: e.target.value})} />
            <input placeholder='Password' type='text' value={data.Password} onChange={e => setData({ ...data, Password: e.target.value})} />
            <button onClick={handleSubmit} type="submit">Login</button>
        </div>
    )
}

export default Auth;