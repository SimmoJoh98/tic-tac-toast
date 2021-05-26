import './sign-in.styles.scss';
import React, {useState} from 'react';
import axios from 'axios';

function Auth () {
    const [data, setData] = useState({Username: '', Password:''})
    
   const handleSubmit = () => {
    
   }

    return(
        <div>
            <input placeholder='Username' type='text' value={data.Username} onChange={e => setData({ ...data, Username: e.target.value})} />
            <input placeholder='Password' type='text' value={data.Password} onChange={e => setData({ ...data, Password: e.target.value})} />
            <button onClick={handleSubmit} type="submit">Sign In</button>
        </div>
    )
}

export default Auth;