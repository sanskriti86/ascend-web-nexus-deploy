
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-webascend-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-webascend-blue to-webascend-purple flex items-center justify-center text-white font-bold text-xl">
                  W
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-webascend-cyan"></div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Web</span>
                <span className="text-webascend-cyan">Ascend</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Taking your business to new heights with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-webascend-purple transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">App Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">Search Engine Optimization</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">Shopify Store Development</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-webascend-cyan transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-webascend-cyan transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-webascend-cyan transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-webascend-cyan mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sankalpgour2@gmail.com" className="text-gray-400 hover:text-webascend-cyan transition-colors">sankalpgour2@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-webascend-cyan mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-webascend-cyan mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">123 Digital Avenue, Tech City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WebAscend. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-webascend-cyan transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
