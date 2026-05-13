import { Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AllMotorcycles } from './pages/AllMotorcycles';
import { MotionBackground } from './components/MotionBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motorcycles" element={<AllMotorcycles />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}