import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDash from './pages/AdminDash'
import { Footer, Navbar } from './components';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<AdminDash />}/>
            </Routes>
            <Footer socialNetworks={[
                {
                    name: 'youtube',
                    link: 'http://youtube'
                },
                {
                    name: 'facebook',
                    link: 'http://facebook'
                },
                {
                    name: 'twitter',
                    link: 'http://twitter'
                },
                {
                    name: 'instagram',
                    link: 'http://instagram'
                },
                {
                    name: 'linkedin',
                    link: 'http://linkedin'
                },
            ]} />
        </BrowserRouter>
    )
}

export default App
