
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    const elements = document.querySelectorAll('.reveal, .reveal-bottom, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-webascend-purple/10 to-webascend-cyan/10 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-webascend-blue/10 to-webascend-purple/10 rounded-tr-full blur-3xl" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-white/90 shadow-md px-4 py-2 backdrop-blur-sm reveal-bottom">
              <p className="text-sm font-medium text-gray-800">
                <span className="text-webascend-purple">&#10022;</span> Digital Agency for Growing Businesses
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight reveal-bottom">
              Taking Your Business to 
              <span className="gradient-text"> New Heights</span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl reveal-bottom">
              We create cutting-edge digital solutions that help businesses thrive in today's competitive landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal-bottom">
              <a 
                href="https://calendly.com/sankalpgour2" target='_blank'
                className="px-6 py-3 bg-gradient-to-r from-webascend-blue to-webascend-purple text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Book a Call
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                Our Services
              </a>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-700 reveal-bottom">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-webascend-blue to-webascend-purple"
                  />
                ))}
              </div>
              <div>
                <span className="font-medium">100+ Clients</span> trust us worldwide
              </div>
            </div>
          </div>
          
          <div className="relative reveal-right">
            <div className="relative z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-webascend-blue to-webascend-purple rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Digital Development Services" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Innovative Solutions</h2>
                  <p className="text-base md:text-lg text-center max-w-md">Building cutting-edge digital experiences</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-white rounded-lg shadow-xl p-4 animate-float">
                <div className="w-full h-full bg-gradient-to-tr from-webascend-blue to-webascend-cyan rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-white rounded-lg shadow-xl p-4 animate-bounce-subtle">
                <div className="w-full h-full bg-gradient-to-br from-webascend-purple to-webascend-cyan rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-webascend-light rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
