import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const showScrolledLook = isScrolled || !isHomePage;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showScrolledLook 
        ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className={`text-xl font-semibold transition-colors ${showScrolledLook ? 'text-gray-900' : 'text-white'}`}>
              Royal Motorcycle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>Home</Link>
            <Link to="/motorcycles" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>Shop</Link>
            <a href="#about" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>About</a>
            <a href="#contact" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <button className={`p-2 rounded-lg transition-colors ${showScrolledLook ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/10 text-white'}`}>
              <ShoppingCart className="w-6 h-6" />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 md:hidden rounded-lg transition-colors ${showScrolledLook ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/10 text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link to="/" className="text-xl font-medium text-gray-900 hover:text-red-600 transition-colors">Home</Link>
              <Link to="/motorcycles" className="text-xl font-medium text-gray-900 hover:text-red-600 transition-colors">Shop</Link>
              <a href="#about" className="text-xl font-medium text-gray-900 hover:text-red-600 transition-colors">About Us</a>
              <a href="#contact" className="text-xl font-medium text-gray-900 hover:text-red-600 transition-colors">Contact</a>
              <button className="w-full py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-200">
                Book a Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
