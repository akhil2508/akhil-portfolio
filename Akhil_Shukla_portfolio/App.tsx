
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Innovation from './components/Innovation';
import Education from './components/Education';
import Recognition from './components/Recognition';
import Projects from './components/Projects';
import Distinctions from './components/Distinctions';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#112836] text-[#CAD6DE] min-h-screen">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-50" 
        style={{backgroundImage: "url('https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2400/https://cdn.gamma.app/zc87vhr30n8uf3n/d0f51a018ec24c81b90f74069c16bfb7/original/Frame-59718.png')"}}
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 md:space-y-16">
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Innovation />
          <Education />
          <Recognition />
          <Projects />
          <Distinctions />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
