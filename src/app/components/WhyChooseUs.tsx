import { Shield, Truck, CreditCard, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Warranty Support",
    description: "Comprehensive warranty coverage on all motorcycles with 24/7 roadside assistance"
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Free delivery across the country with professional setup at your doorstep"
  },
  {
    icon: CreditCard,
    title: "Financing Available",
    description: "Flexible payment plans with competitive rates and quick approval process"
  },
  {
    icon: Award,
    title: "Genuine Motorcycles",
    description: "100% authentic motorcycles from authorized manufacturers with certification"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Royal Motorcycle</h2>
          <p className="text-lg text-gray-600">Experience excellence in every aspect of your journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
