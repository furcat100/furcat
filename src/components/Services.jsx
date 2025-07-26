import React from 'react';
import { Heart, Home, Utensils, Trash2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: "Professional Cat Care",
      description: "Our experienced staff provides loving, attentive care for your cats with regular health monitoring and personalized attention.",
      features: ["Health monitoring", "Medication administration", "Grooming services", "Play and exercise time"]
    },
    {
      icon: <Trash2 className="w-12 h-12 text-teal-600" />,
      title: "Clean Litter Box Service",
      description: "We maintain pristine litter boxes with regular cleaning schedules using premium, odor-controlling litter brands.",
      features: ["Multiple daily cleanings", "Premium litter brands", "Odor control", "Hygiene maintenance"]
    },
    {
      icon: <Utensils className="w-12 h-12 text-purple-600" />,
      title: "Custom Food Service",
      description: "We accommodate your cat's specific dietary needs and preferences, including special diets and favorite foods you provide.",
      features: ["Your choice of food", "Special dietary needs", "Regular feeding schedule", "Fresh water always available"]
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Separate Private Rooms",
      description: "Each cat enjoys their own comfortable, secure room with cozy bedding, toys, and plenty of space to relax and play.",
      features: ["Private individual rooms", "Comfortable bedding", "Climate controlled", "Safe and secure environment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Premium <span className="text-orange-600">Cat Care</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive care services to ensure your beloved cats are happy, healthy, and comfortable during their stay with us.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Book Your Cat's Stay?</h3>
            <p className="text-xl mb-6 opacity-90">Contact us today to discuss your cat's specific needs and schedule their boarding.</p>
            <a 
              href="tel:08305014935"
              className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-block"
            >
              Call Now: 083050 14935
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;