import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            {/* Rutas */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
