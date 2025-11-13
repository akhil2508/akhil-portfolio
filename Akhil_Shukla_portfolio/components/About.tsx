
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#112836] p-8 md:p-12 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Full-Stack Developer & Entrepreneur</h2>
          <div className="space-y-4 text-base md:text-lg text-[#CAD6DE]">
            <p>
              Full-Stack Developer and Founder with experience building and scaling a web platform to 5,000+ users. Currently leveraging this real-world experience to excel in my MCA program with an impressive 8.7 SGPA.
            </p>
            <p>
              Proficient in Java, Data Structures and Algorithms (DSA), and the MERN stack (MongoDB, Express.js, React, and Node.js), with hands-on success building complex, scalable applications like MediConnect Plus. Seeking to apply my unique blend of entrepreneurial and technical skills to a challenging software engineering role.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwNvR8FW_ONqEZEciqTwjiYPTUdqNd-hFNEbRDwKCKN7Qnr9encvZ3p4RIlMf5bq2FC66X-hDCvm4kXdLEVj1P47sKd0KQdH7w-uZIBYG-iM-FarMVZ1uZlCF4hQioPryX-KqZ-vjsf7jS9KFUElCjaGNe46IuhR513wkgezFr69CbGvxQ-nBKSnUgEtu/s16000/Akhil%20Picture.jpeg"
            alt="Collaborative workspace"
            className="rounded-lg shadow-2xl w-full max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
