import { ImageWithFallback } from './figma/ImageWithFallback';

export function CallToAction() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="/images/ry150-1.jpg"
              alt="Premium motorcycles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70"></div>
          </div>

          <div className="relative px-12 py-20 text-center md:text-left md:max-w-3xl">
            <h2 className="text-5xl font-bold text-white mb-6">Find Your Perfect Ride</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Start your journey with Royal Motorcycle today. Explore our collection and experience the thrill of premium motorcycles in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-10 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl text-lg font-bold">
                Start Your Purchase
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all text-lg font-bold">
                Locate a Branch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
