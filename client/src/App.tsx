import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import { Footer } from './components';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
