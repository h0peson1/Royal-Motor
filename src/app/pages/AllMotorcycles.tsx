import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, CheckCircle2 } from 'lucide-react';

const allMotorcycles = [
  { 
    id: 1, 
    name: "RY 150-36 Black", 
    image: "/images/RY150-36-Black.jpg", 
    cc: "150cc",
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
    id: 2, 
    name: "RY 110-35", 
    image: "/images/ry110-35.jpg", 
    cc: "110cc",
    specs: {
      engine: "110cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "4-Speed Manual",
      fuelCapacity: "8 Liters",
      braking: "Front Drum / Rear Drum",
      maxSpeed: "85 km/h",
      ignition: "CDI",
      loadCapacity: "120 kg"
    }
  },
  { 
    id: 3, 
    name: "RY 125-17", 
    image: "/images/ry125-17.jpg", 
    cc: "125cc",
    specs: {
      engine: "125cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "10 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "95 km/h",
      ignition: "CDI",
      loadCapacity: "140 kg"
    }
  },
  { 
    id: 4, 
    name: "RY 125-9", 
    image: "/images/ry125-9.jpg", 
    cc: "125cc",
    specs: {
      engine: "125cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "10 Liters",
      braking: "Front Drum / Rear Drum",
      maxSpeed: "90 km/h",
      ignition: "CDI",
      loadCapacity: "140 kg"
    }
  },
  { 
    id: 5, 
    name: "RY 125A", 
    image: "/images/ry125a.jpg", 
    cc: "125cc",
    specs: {
      engine: "125cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "12 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "95 km/h",
      ignition: "CDI",
      loadCapacity: "150 kg"
    }
  },
  { 
    id: 6, 
    name: "RY 150-1", 
    image: "/images/ry150-1.jpg", 
    cc: "150cc",
    specs: {
      engine: "150cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "12 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "100 km/h",
      ignition: "CDI",
      loadCapacity: "150 kg"
    }
  },
  { 
    id: 7, 
    name: "RY 150-12", 
    image: "/images/ry150-12.jpg", 
    cc: "150cc",
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
    id: 8, 
    name: "RY 150-36", 
    image: "/images/ry150-36.jpg", 
    cc: "150cc",
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
    id: 9, 
    name: "RYGY 150", 
    image: "/images/rygy150.jpg", 
    cc: "150cc",
    specs: {
      engine: "150cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "11 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "100 km/h",
      ignition: "CDI",
      loadCapacity: "150 kg"
    }
  },
  { 
    id: 10, 
    name: "RYGY 150 Plus", 
    image: "/images/rygy150plus.jpg", 
    cc: "150cc",
    specs: {
      engine: "150cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "13 Liters",
      braking: "Front Disc / Rear Drum",
      maxSpeed: "105 km/h",
      ignition: "CDI",
      loadCapacity: "160 kg"
    }
  },
  { 
    id: 11, 
    name: "RY Sports 200", 
    image: "/images/rysports200.jpg", 
    cc: "200cc",
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
    id: 12, 
    name: "RY Sports II", 
    image: "/images/rysportsII.jpg", 
    cc: "200cc",
    specs: {
      engine: "200cc, 4-Stroke, Single Cylinder, Air-Cooled",
      transmission: "5-Speed Manual",
      fuelCapacity: "15 Liters",
      braking: "Front Disc / Rear Disc",
      maxSpeed: "120 km/h",
      ignition: "CDI",
      loadCapacity: "180 kg"
    }
  },
];

export function AllMotorcycles() {
  const [selectedBike, setSelectedBike] = useState<typeof allMotorcycles[0] | null>(null);

  return (
    <div className="pt-32 pb-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Full Collection
          </motion.h1>
          <p className="text-xl text-gray-600">Explore our complete range of premium motorcycles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allMotorcycles.map((bike, index) => (
            <motion.div 
              key={bike.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{bike.name}</h3>
                  <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">{bike.cc}</span>
                </div>
                <button 
                  onClick={() => setSelectedBike(bike)}
                  className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-red-600 transition-colors font-semibold"
                >
                  View Specifications
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBike && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedBike(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="bg-gray-50 flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={selectedBike.image}
                    alt={selectedBike.name}
                    className="w-full h-full object-contain max-h-[400px]"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedBike.name}</h2>
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Technical Specifications
                    </span>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(selectedBike.specs).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-gray-900 font-medium">{value}</p>
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
    </div>
  );
}
