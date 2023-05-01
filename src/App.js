import { useState } from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';



function App() {
  
  const [setQuery] = useState('')

  return (
    <div className="App">
      
      <TodoWrapper/>


      
      <button type="submit">Search</button>
      <input type="text" onChange={e => setQuery(e.target.value)} />

    


    </div>
  );
}

export default App;