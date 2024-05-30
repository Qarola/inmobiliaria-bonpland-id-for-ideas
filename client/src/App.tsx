import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { PropertyProvider } from './context/PropertyContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import { Footer, Navbar } from './components';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import CreatePropertyForm from './components/Forms/createPropertyForm';

function App() {
    return (
        <UserProvider>
        <PropertyProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/properties' element={<Properties />} />
                    <Route path="/property/:id" element={<PropertyDetail />} />
                    <Route path="/create/property" element={<CreatePropertyForm />} />
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
        </PropertyProvider>
        </UserProvider>
    )
}

export default App
