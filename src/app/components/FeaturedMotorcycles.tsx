import { Link } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, CheckCircle2 } from 'lucide-react';

const motorcycles = [
  {
    id: 1,
    name: "RY Sports 200",
    price: "GH₵ 20,000",
    cc: "200cc",
    image: "/images/rysports200.jpg",
    specs: {
      engine: "200cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "15 Liters",
      braking: "Front Disc / Rear Disc",
      maxSpeed: "115 km/h",
      ignition: "CDI",
      loadCapacity: "180 kg"
    }
  },
  {
    id: 2,
    name: "RY 150-36",
    price: "GH₵ 13,500",
    cc: "150cc",
    image: "/images/ry150-36.jpg",
    specs: {
      engine: "150cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "12 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "105 km/h",
      ignition: "CDI",
      loadCapacity: "150 kg"
    }
  },
  {
    id: 3,
    name: "RYGY 150 Plus",
    price: "GH₵ 12,500",
    cc: "150cc",
    image: "/images/rygy150plus.jpg",
    specs: {
      engine: "150cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "13 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "105 km/h",
      ignition: "CDI",
      loadCapacity: "160 kg"
    }
  }
];

export function FeaturedMotorcycles() {
  const [selectedBike, setSelectedBike] = useState<typeof motorcycles[0] | null>(null);

  return (
    <section id="shop" className="py-24 px-4 sm:px-6 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Motorcycles</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Discover our premium collection of high-performance motorcycles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {motorcycles.map((bike) => (
            <div key={bike.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden bg-gray-50">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{bike.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-bold text-red-600">{bike.price}</span>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">{bike.cc}</span>
                </div>
                <button 
                  onClick={() => setSelectedBike(bike)}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
                >
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/motorcycles" 
            className="inline-block w-full sm:w-auto px-12 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-1"
          >
            See More Motorcycles
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedBike && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBike(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedBike(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm hover:bg-gray-100 rounded-full transition-colors z-20 shadow-sm"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6 min-h-[300px]">
                  <ImageWithFallback
                    src={selectedBike.image}
                    alt={selectedBike.name}
                    className="w-full h-full object-contain max-h-[300px] md:max-h-[500px]"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 sm:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selectedBike.name}</h2>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-red-600">{selectedBike.price}</span>
                      <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Technical Specifications
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                    {Object.entries(selectedBike.specs).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-sm sm:text-base text-gray-900 font-medium">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                    Inquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
