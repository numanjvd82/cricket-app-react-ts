import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/:id" element={<MatchPage />} />
      </Routes>
    </>
  );
}

export default App;
