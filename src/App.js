import './App.css';
import { Routes, Route } from 'react-router-dom'

import Index from './views/Index/index'

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
