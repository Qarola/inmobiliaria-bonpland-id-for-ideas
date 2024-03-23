import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Rutas */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
