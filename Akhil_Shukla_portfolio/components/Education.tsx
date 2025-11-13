import React from 'react';

const educationData = [
  {
    title: "Master of Computer Applications",
    institution: "PSIT Kanpur",
    duration: "September 2024 - August 2026",
    details: "Computer Science | Current SGPA: 8.7"
  },
  {
    title: "Bachelor of Science",
    institution: "Christ Church College, Kanpur",
    duration: "August 2017 - February 2021",
    details: "Strong foundation in computer science fundamentals"
  },
  {
    title: "Senior Secondary Education",
    institution: "Florets International School",
    duration: "January 2016 - August 2017",
    details: "Physics, Chemistry, Mathematics, Computer Science"
  },
  {
    title: "High School",
    institution: "Florets International School",
    duration: "2013 - 2015",
    details: "Mathematics, Science, and Fundamentals of I.T."
  }
];

const Education: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center rounded-lg p-8 md:p-12"
    >
      <div className="absolute inset-0 bg-[#112836] bg-opacity-80 rounded-lg z-0" style={{
        backgroundImage: "url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2400/https://cdn.gamma.app/90qvsbzw0bhsdvf/generated-images/2Iy-bI6-n9IayL6MBJlRu.png')",
        backgroundBlendMode: 'multiply',
      }}></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Educational Journey</h2>
        <div className="relative border-l-2 border-[#49606e] pl-10 space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[49px] top-1 w-10 h-10 rounded-full bg-[#1e3543] border-2 border-[#49606e] flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="p-6 bg-[#1e3543] bg-opacity-50 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="font-bold text-[#CAD6DE] mt-1">{item.institution}</p>
                <p className="text-sm text-[#8b8b90] mt-1">{item.duration}</p>
                <p className="text-[#CAD6DE] mt-2">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
