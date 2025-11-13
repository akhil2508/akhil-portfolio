
import React from 'react';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 py-8 z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#8b8b90]">
        <div className="flex justify-center space-x-8 mb-6">
          <a href="mailto:akhilshukla12345@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
            <MailIcon />
          </a>
          <a href="https://www.linkedin.com/in/akhilshukla2508" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/akhil2508/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Akhil Shukla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
