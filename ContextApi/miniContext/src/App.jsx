// import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>React Context-Api(useContext)</h1>
        <Login /> {/* Make sure Login component is correctly implemented */}
        <Profile /> {/* Make sure Profile component is correctly implemented */}
      </div>
    </UserContextProvider>
  );
}

export default App;
