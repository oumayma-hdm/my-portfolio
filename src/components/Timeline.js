import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: '2023-2024',
      title: 'Full-Stack Developer at VOID',
      description: 'Participated in the design of the new Void factory application base and developed custom modules for Drupal 9.',
    },
    {
      year: '2022',
      title: 'Backend Developer at PIXLABE',
      description: 'Developed a restaurant management system using Vue.js and Strapi.',
    },
    {
      year: '2021',
      title: 'Intern in Web Development at FES',
      description: 'Collaborated with the development team to design and develop custom modules for Drupal 9.',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">Timeline</h2>
      <div className="relative wrap overflow-hidden h-full">
        <div className="absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-6 py-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h4 className="mb-2 text-2xl font-semibold text-white">{event.year}</h4>
              <h5 className="mb-2 text-xl font-bold text-purple-400">{event.title}</h5>
              <p className="text-base leading-relaxed text-white">{event.description}</p>
            </div>
            <div className={`absolute ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`}>
              <div className="bg-gray-800 text-white font-semibold py-1 px-2 rounded-lg shadow-lg">{event.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
