// src/components/MyServices.jsx
import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and interactive websites.',
    icon: '🌐',
  },
  {
    title: 'Languages',
    description: 'Fluent in Arabic and English, with intermediate knowledge of other languages.',
    icon: '🗣️',
  },
  {
    title: 'Photoshop',
    description: 'Proficient in Photoshop for graphic design and photo editing.',
    icon: '🎨',
  },
];

const MyServices = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-20 text-white ">My <span className='text-blue-500'>  Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative w-full h-64 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-700">
                <div className="absolute backface-hidden bg-white p-4 shadow-lg rounded-lg flex flex-col justify-center items-center">
                  <span className="text-6xl mb-4">{service.icon}</span>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="absolute backface-hidden bg-blue-500 text-white p-4 shadow-lg rounded-lg flex flex-col justify-center items-center transform rotate-y-180">
                  <p className="text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
