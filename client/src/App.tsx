import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
<<<<<<< HEAD
import Register from './pages/Register';
import { Footer } from './components';
=======
import { Footer, SocialNetworkEnum } from './components';
>>>>>>> 47db7f63d6bedf321fd174ade250b4924aac632d

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
<<<<<<< HEAD
=======
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
>>>>>>> 47db7f63d6bedf321fd174ade250b4924aac632d
        </BrowserRouter>
    )
}

export default App
