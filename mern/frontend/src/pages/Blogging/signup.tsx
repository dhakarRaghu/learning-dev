import axios from 'axios';
import React, { useState } from 'react'


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success , setSuccess] = useState(false);

  async  function handleSignup () {
        try{
          const res = await axios.post('http://localhost:5001/api/signup', { username, email, password });
          if(res){
                console.log({ res, message: 'Signup successful' });
                setSuccess(true);
          }
            else{
                console.log('Signup failed');
            }
        }
        catch(error){
            console.error('Error in signup:', error);
            alert('Failed to signup. Please try again.');
            setSuccess(false);
        }
      }
      

  return (
    <div>
        <div>
            <input type="text" placeholder='username' value={username}onChange={(e) => setUsername(e.target.value)}
             style={{ marginRight: '10px', padding: '5px' }}/>
            <input type="email" placeholder='email' value={email}onChange={(e) => setEmail(e.target.value)}
             style={{ marginRight: '10px', padding: '5px' }}/>
            <input type="passwaord" placeholder='password' value={password}onChange={(e) => setPassword(e.target.value)}
             style={{ marginRight: '10px', padding: '5px' }}/>

                 <button onClick={handleSignup} style={{ padding: '5px 10px' }}>
                    signup
                    </button>
        </div>

        {success && (
            <div>
                <h1>Signup successful</h1>
                <h2>{username}</h2>
            </div>
            )}

      
    </div>
  )
}

export default Signup
