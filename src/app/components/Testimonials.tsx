import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chen",
    location: "Accra, Ghana",
    rating: 5,
    text: "The purchasing experience was seamless and professional. My RY Sports 200 is absolutely incredible. Best investment I've made!",
    bike: "RY Sports 200"
  },
  {
    name: "Sarah Johnson",
    location: "Kumasi, Ghana",
    rating: 5,
    text: "Outstanding service from start to finish. The financing process was smooth, and the team went above and beyond to ensure I got the perfect motorcycle.",
    bike: "RY 150-36"
  },
  {
    name: "David Martinez",
    location: "Takoradi, Ghana",
    rating: 5,
    text: "Royal Motorcycle exceeded all expectations. The quality, service, and attention to detail are unmatched. Highly recommend to anyone looking for premium motorcycles.",
    bike: "RYGY 150 Plus"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Riders Say</h2>
          <p className="text-lg text-gray-600">Join thousands of satisfied customers across Ghana</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">"{testimonial.text}"</p>

              <div className="border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600 mt-1">{testimonial.location}</p>
                <p className="text-sm text-red-600 mt-2 font-medium tracking-wide uppercase">{testimonial.bike}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
