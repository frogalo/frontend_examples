import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buttons from './routes/Buttons';
import Divs from './routes/Divs';
import Header from './fragments/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/divs" element={<Divs />} />
                <Route path="/buttons" element={<Buttons />} />
            </Routes>
        </Router>
    );
}

export default App;
