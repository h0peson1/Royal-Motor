import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[95vh] min-h-[600px] flex items-center justify-start px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop"
          alt="Premium luxury motorcycle"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Subtle fade at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Ride Beyond<br />Limits
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-200 leading-relaxed mb-10"
          >
            Experience the ultimate freedom with our premium collection of motorcycles.
            Engineering excellence meets timeless design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transform hover:-translate-y-1 font-semibold">
              Shop Motorcycles
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 font-semibold">
              Book Consultation
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-red-500" />
              <span>Financing Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-red-500" />
              <span>Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-red-500" />
              <span>Warranty Included</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
