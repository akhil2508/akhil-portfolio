import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-[#1C3645] p-8 md:p-12 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <h3 className="text-xl md:text-2xl text-white mb-6">Ready to bring entrepreneurial drive and technical excellence to your team</h3>
          <p className="text-base md:text-lg text-[#CAD6DE] mb-8">
            I'm seeking opportunities to apply my unique blend of real-world platform development, MERN stack expertise, and proven ability to scale products. Let's discuss how I can contribute to your organization's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="mailto:akhilshukla12345@gmail.com"
              className="bg-[#0A988B] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0dc8b7] transition-colors duration-300 text-center"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/akhilshukla2508"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#0A988B] text-[#0A988B] font-bold py-3 px-6 rounded-md hover:bg-[#0A988B] hover:text-white transition-colors duration-300 text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
          <p className="text-[#CAD6DE]">
            <span className="font-bold">Location:</span> Kanpur Nagar, Uttar Pradesh, India
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTJeR5P1qhoGBJQE7JWstXy7X5n1nmZDemraoa0rPuP8ZAy_UsyGREMZbAPlxIhkTHJiKXOuIkqy1fN70E314ElnCzELQP4q2D4VzqvrHEo_G1vjYWjETCUUCMQC5iOfwzd_-utsMGg43yrVJNMX0vUwO2-riEhlYjWQomgs_dsDIjHb22N1jvU2NqfPIt/s16000/IMG_20230825_175740.jpg" 
            alt="Contact illustration"
            className="rounded-lg shadow-2xl w-full max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
