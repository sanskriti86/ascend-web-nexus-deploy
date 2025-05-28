
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
                <a href="mailto:sankalpgour2@gmail.com" className="text-gray-400 hover:text-webascend-cyan transition-colors">support@webascend.co.in</a>
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
