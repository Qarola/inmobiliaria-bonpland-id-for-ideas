import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import { Footer, Navbar } from './components';
import { AboutUs } from './pages/AboutUs';

function App() {
    return (
        <UserProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<AboutUs />} />
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
        </UserProvider>
    )
}

export default App
