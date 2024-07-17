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
      <h2 className="text-4xl mb-8 text-center">Timeline</h2>
      <div className="relative wrap overflow-hidden h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {events.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 bg-gray-900 rounded-lg shadow-lg">
              <h4 className="mb-2 font-bold text-lg text-white">{event.year}</h4>
              <h5 className="mb-2 font-bold text-lg text-purple-500">{event.title}</h5>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
