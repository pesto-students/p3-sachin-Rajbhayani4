import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ContectUs from './ContectUs';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

const Index = () => {
    return (
        <BrowserRouter>
            <nav>
                <Navbar />
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contectUs" element={<ContectUs />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
        </BrowserRouter>
    );
}

export default Index;