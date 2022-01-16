import Login from './login/login';
import './App.css';
import Cube from './login/cube';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Hello from './login/hello';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/question/0" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
