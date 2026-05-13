import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use the "scrolled" look (glass/solid) if we've scrolled OR if we are not on the home page
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

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>Home</Link>
            <Link to="/motorcycles" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>Shop</Link>
            <a href="#about" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>About</a>
            <a href="#contact" className={`transition-colors font-medium hover:text-red-500 ${showScrolledLook ? 'text-gray-900' : 'text-gray-200'}`}>Contact</a>
          </div>

          <button className={`p-2 rounded-lg transition-colors ${showScrolledLook ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/10 text-white'}`}>
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
