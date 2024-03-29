import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import { Footer, SocialNetworkEnum } from './components';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
            <Footer socialNetworks={[
                {
                    name: SocialNetworkEnum.youtube,
                    link: 'youtube'
                },
                {
                    name: SocialNetworkEnum.facebook,
                    link: 'facebook'
                },
                {
                    name: SocialNetworkEnum.twitter,
                    link: 'twitter'
                },
                {
                    name: SocialNetworkEnum.instagram,
                    link: 'instagram'
                },
                {
                    name: SocialNetworkEnum.linkedin,
                    link: 'linkedin'
                },
            ]} />
        </BrowserRouter>
    )
}

export default App
