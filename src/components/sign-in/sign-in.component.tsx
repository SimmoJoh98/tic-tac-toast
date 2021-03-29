import './sign-in.styles.css';
import React, {useState} from 'react';
import Axios from 'axios';

function Auth () {
    const [data, setData] = useState({Username: '', Password:''})

   const handleSubmit = () => {
       console.log(data.Username);
       console.log(data.Password);
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