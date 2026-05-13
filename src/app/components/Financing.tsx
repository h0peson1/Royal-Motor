import { Check } from 'lucide-react';

const financingOptions = [
  {
    plan: "Standard Plan",
    rate: "4.9% APR",
    term: "36 months",
    features: [
      "No down payment required",
      "Quick approval process",
      "Flexible payment options",
      "Early payoff available"
    ]
  },
  {
    plan: "Premium Plan",
    rate: "3.9% APR",
    term: "48 months",
    features: [
      "Lower monthly payments",
      "Extended warranty included",
      "Priority service access",
      "Trade-in assistance"
    ]
  },
  {
    plan: "Elite Plan",
    rate: "2.9% APR",
    term: "60 months",
    features: [
      "Lowest interest rate",
      "Full maintenance coverage",
      "VIP customer support",
      "Upgrade options available"
    ]
  }
];

export function Financing() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Financing Options</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your budget and lifestyle</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {financingOptions.map((option, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 ${
                index === 1
                  ? 'border-red-600 bg-red-50/30 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-red-200'
              } transition-all duration-300`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.plan}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-red-600">{option.rate}</span>
                </div>
                <p className="text-gray-600 mt-2">{option.term} financing</p>
              </div>

              <ul className="space-y-4 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg transition-colors font-bold ${
                index === 1
                  ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-200'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
