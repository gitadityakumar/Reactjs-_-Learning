import  { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState(''); // Define username state
  const [password, setPassword] = useState(''); // Define password state

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Use setUsername state setter
        placeholder='username'
      />
      <input
        type='password' // Use type='password' for password input
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Use setPassword state setter
        placeholder='password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
