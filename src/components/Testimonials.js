import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company Inc.',
    text: 'Oumayma is a fantastic developer who delivered exceptional results on our project.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Tech Solutions',
    text: 'Working with Oumayma was a pleasure. She is highly skilled and very professional.',
  },
  {
    name: 'Sam Wilson',
    role: 'Project Manager, DevWorks',
    text: 'Oumayma has an eye for detail and a great understanding of web development.',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto">
      <h2 className="text-4xl mb-6 text-center"> Testimonials</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg m-4 w-full md:w-1/3">
            <p className="text-xl mb-2">{testimonial.text}</p>
            <p className="text-yellow-500 font-bold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
