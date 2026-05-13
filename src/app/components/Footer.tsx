import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-semibold">Royal Motorcycle</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ghana's premier destination for luxury motorcycles. Experience the perfect blend of performance and elegance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/motorcycles" className="text-gray-400 hover:text-red-500 transition-colors">Full Collection</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#financing" className="text-gray-400 hover:text-red-500 transition-colors">Financing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">No. 14 Klan Street, North Industrial Area, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">+233 55 212 4444</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">info@royal-motorcycle.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Connect With Us</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest arrivals and exclusive offers in Ghana.</p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors group">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 Royal Motors Ghana Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
