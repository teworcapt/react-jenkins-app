
import { useState } from 'react';
import { getGreeting } from './greeting.js';

function App() {
  const [name, setName] = useState('');

  return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>React Jenkins CI/CD Project</h1>

      <p>Welcome to our automated deployment application!</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      />

      <h2>{getGreeting(name)}</h2>

      <p>Built with React and Vite.</p>
    </div>
  );
}

export default App;
