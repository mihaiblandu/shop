import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import DropDown from './Componentes/DropDown'
function App() {
  return (
    <Router>
        <Navbar/>
    </Router>
  );
}

export default App;
