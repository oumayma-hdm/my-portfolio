import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: 'Now',
      title: 'Full-Stack Developer at VOID',
      description: 'Participated in the design of the new Void factory application base and developed custom modules for Drupal 9.',
      city: 'Fes'
    },
    {
      year: '2023',
      city: 'Fes',
      title: 'Full-Stack Developer intern at VOID',
      description: 'Collaborated with the development team to design and develop custom modules for Drupal 9.',
    },
    {
      year: '2021',
      city: 'London',
      title: 'Backend Developer at PIXLABE',
      description: 'Developed a restaurant management system using Vue.js and Strapi.',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl mb-10 text-center text-green-400">Timeline Experiences</h2>
      <div className="relative wrap overflow-hidden h-full">
        <div className="absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2"></div>
        <div className="border border-green-500 rounded-lg p-4">
          {events.map((event, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-4`}>
              <div className={`flex-1 border-l-4 border-green-500 ${index % 2 === 0 ? 'pl-4' : 'pr-4'}`}>
                <div className="bg-black text-purple-300 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800">
                  <h4 className="mb-1 text-lg font-semibold">{event.city}</h4>
                  <h5 className="mb-1 text-md font-bold">{event.title}</h5>
                  <p className="text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
              <div className={`flex-none w-20 text-center ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                <div className="bg-black text-white-300 font-semibold py-1 px-2 rounded-lg border border-green-500 transition-transform transform hover:scale-105 hover:bg-gray-800">
                  {event.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;