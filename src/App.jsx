import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Project';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;