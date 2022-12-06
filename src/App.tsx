import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/authContext';
import Home from './pages/Home';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <AuthContextProvider>
              <Navbar />
            </AuthContextProvider>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<MatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
