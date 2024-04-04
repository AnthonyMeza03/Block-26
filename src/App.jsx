import React, { useState } from 'react';
import ContactList from './Components/ContactList.jsx'; // Importing the ContactList component
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"> {/* Added rel attribute for security */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer"> {/* Added rel attribute for security */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ContactList /> {/* Rendering the ContactList component */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  );
}

export default App;

