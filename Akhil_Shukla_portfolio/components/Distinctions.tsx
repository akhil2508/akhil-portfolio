import React from 'react';

const distinctionsData = [
  {
    title: "Entrepreneurial Mindset",
    description: "Founded and scaled a successful platform from zero to 5,000+ users, demonstrating product vision and execution excellence.",
    bgColor: "#0A988B"
  },
  {
    title: "Real-World Experience",
    description: "Seven years of hands-on development, managing technical operations, and solving complex user problems at scale.",
    bgColor: "#1C3645"
  },
  {
    title: "Academic Excellence",
    description: "Strong theoretical foundation with 8.7 SGPA in MCA program, combining practical skills with computer science fundamentals.",
    bgColor: "#061722"
  }
];

const Distinctions: React.FC = () => {
  return (
    <section className="bg-[#112836] p-8 md:p-12 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">What Sets Me Apart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {distinctionsData.map((item, index) => (
          <div key={index} className="p-6 rounded-lg text-white h-full" style={{ backgroundColor: item.bgColor }}>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-white text-opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-lg text-[#CAD6DE] max-w-4xl mx-auto">
        My unique combination of entrepreneurial success, technical expertise, and academic achievement positions me to make immediate impact in challenging software engineering roles.
      </p>
    </section>
  );
};

export default Distinctions;
