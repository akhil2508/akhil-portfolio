
import React from 'react';

const innovations = [
  {
    title: "Platform Engineering",
    description: "Engineered the core platform using HTML, CSS, and JavaScript, designing and implementing online tutor registration forms and a live database for student inquiries."
  },
  {
    title: "Smart Location Mapping",
    description: "Developed a key feature using the Google Maps API to parse and map tutor location data, optimizing the student-tutor pairing process for maximum efficiency."
  },
  {
    title: "Full-Stack Management",
    description: "Managed all product development, technical operations, and client communications, ensuring high customer satisfaction and continuous business growth."
  }
];

const Innovation: React.FC = () => {
  return (
    <section 
      className="bg-cover bg-center rounded-lg p-8 md:p-12 relative"
      style={{backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXkOuka_22ipWdNgGNcE-hyo4gMPBhd5I3c5OS_nDQkUXYvdNYggGcB1Yqya7A0HNXZIxFiR9tBm5RmooORfeGyVUSdf1Vqg1k-0QSsEO26bI_QQAt1dQi33JLOVeD-rbDZba8CzO80LigWGJ_oHS44Hqic5rKQFRZQWu_9viGd4rNMRHzfPDYd3NpGsKY/s16000/WhatsApp%20Image%202025-11-13%20at%204.56.19%20AM.jpeg')"}}
    >
      <div className="absolute inset-0 bg-[#112836] opacity-80 rounded-lg"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Technical Innovation at <a href="https://share.google/55eeXlzqavxDM7rN5" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0dc8b7] transition-colors duration-300">Dynamic Tutorial</a>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <div key={index} className="bg-[#112836] bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
              <div className="flex items-start mb-4">
                <div className="text-2xl font-bold text-[#0A988B] mr-4">0{index + 1}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#CAD6DE]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;