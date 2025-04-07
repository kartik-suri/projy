import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturesPage from './pages/FeaturesPage';
import HomePage from './pages/HomePage';
import UseCasesPage from './pages/UseCasesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;