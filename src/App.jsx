import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Project';
import Error404 from './pages/Error';

const App = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
    );
};

export default App;