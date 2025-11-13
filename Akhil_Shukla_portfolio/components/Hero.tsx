
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#112836] rounded-lg overflow-hidden min-h-[60vh] md:min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-8 gap-8 items-center w-full">
        <div className="p-8 md:p-12 md:col-span-3 lg:col-span-5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Akhil Shukla
          </h1>
          <p className="text-lg md:text-xl text-[#CAD6DE] mb-8">
            Software Developer | Founder @ <a href="http://www.dynamictutorial.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0dc8b7] transition-colors duration-300">Dynamic Tutorial</a> | MERN Stack | Java
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:akhilshukla12345@gmail.com"
              className="bg-[#0A988B] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0dc8b7] transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/akhilshukla2508"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#0A988B] text-[#0A988B] font-bold py-3 px-6 rounded-md hover:bg-[#0A988B] hover:text-white transition-colors duration-300"
            >
              View LinkedIn
            </a>
          </div>
        </div>
        <div className="h-64 md:h-full w-full md:col-span-2 lg:col-span-3">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk4zeVSFVcXH0NrIgLqnEvihhAbs7eYiy-rMD2q6yw8EUiJYO5Bh1rgVXSROkDtXrrtY3DuhobInr9RJSyC0a4NTU2fwOUsJG9jLCxpu44A5JcCO06Ao3iaowgqUwG0i1UZdJhHINniIr2vRqVF-SwA0y5cWcOu6mB25oxJP6sppPbS9V5kOQSNlfOpCcC/s16000/ChatGPT%20Image%20Nov%2013,%202025,%2006_13_45%20AM.png" 
            alt="Akhil Shukla" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
