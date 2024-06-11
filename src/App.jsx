import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Project';

const App = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
    );
};

export default App;