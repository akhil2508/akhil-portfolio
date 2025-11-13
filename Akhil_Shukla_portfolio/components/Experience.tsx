
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="bg-[#112836] p-8 md:p-12 rounded-lg">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dynamic Tutorial: Building from Zero to 5,000+ Users
        </h2>
        <p className="text-base md:text-lg text-[#CAD6DE] mb-12">
          Founded and scaled <a href="http://www.dynamictutorial.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0dc8b7] transition-colors duration-300">Dynamic Tutorial</a> from the ground up, creating a thriving educational platform that connects students with qualified tutors across Kanpur and Lucknow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-[#1e3543] p-8 rounded-lg text-center">
          <p className="text-5xl md:text-6xl font-bold text-[#0A988B] mb-2">
            5K+
          </p>
          <h3 className="text-xl font-bold text-white">Registered Tutors</h3>
          <p className="text-[#CAD6DE] mt-2">Built a comprehensive network of qualified educators</p>
        </div>
        <div className="bg-[#1e3543] p-8 rounded-lg text-center">
          <p className="text-5xl md:text-6xl font-bold text-[#0A988B] mb-2">
            1.8K+
          </p>
          <h3 className="text-xl font-bold text-white">Parent Users</h3>
          <p className="text-[#CAD6DE] mt-2">Trusted by families seeking quality education</p>
        </div>
        <div className="bg-[#1e3543] p-8 rounded-lg text-center">
          <p className="text-5xl md:text-6xl font-bold text-[#0A988B] mb-2">
            7+
          </p>
          <h3 className="text-xl font-bold text-white">Years Running</h3>
          <p className="text-[#CAD6DE] mt-2">Continuous growth since September 2018</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
