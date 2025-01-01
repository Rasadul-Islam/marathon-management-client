import React from 'react';

const UpcomingMarathons = () => {
  // Static upcoming marathon data
  const marathons = [
    {
      title: 'Dhaka Marathon 2024',
      date: 'February 25, 2024',
      location: 'Dhaka, Bangladesh',
      description: 'The Dhaka Marathon is one of the most awaited marathons in Bangladesh.',
    },
    {
      title: 'Chittagong Coastal Marathon',
      date: 'March 15, 2024',
      location: 'Chittagong, Bangladesh',
      description: 'A scenic coastal marathon race along the beautiful coastline of Chittagong.',
    },
    {
      title: 'Sylhet Ultra Marathon',
      date: 'April 5, 2024',
      location: 'Sylhet, Bangladesh',
      description: 'A challenging ultra marathon through the hilly terrains of Sylhet.',
    },
    {
      title: 'Rajshahi Half Marathon',
      date: 'May 10, 2024',
      location: 'Rajshahi, Bangladesh',
      description: 'A half marathon event offering a great course along the riverbanks of Rajshahi.',
    },
    {
      title: 'Khulna Green Marathon',
      date: 'June 20, 2024',
      location: 'Khulna, Bangladesh',
      description: 'A marathon aimed at promoting environmental awareness through running.',
    },
    {
      title: 'Barisal Marathon',
      date: 'July 18, 2024',
      location: 'Barisal, Bangladesh',
      description: 'An exciting marathon event hosted in the picturesque city of Barisal.',
    }
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Upcoming Marathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {marathons.map((marathon, index) => (
          <div key={index} className="bg-lime-100 border rounded-lg shadow-md overflow-hidden h-52 ">
            <div className="p-4">
              <h3 className="text-lg font-semibold">{marathon.title}</h3>
              <p className="text-sm text-gray-600">{marathon.date}</p>
              <p className="text-sm text-gray-600">{marathon.location}</p>
              <p className="mt-2 text-sm text-gray-800">{marathon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
