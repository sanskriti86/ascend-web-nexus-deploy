
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Web Development",
    description: "Custom website design and development with responsive layouts, modern frameworks, and seamless user experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with intuitive interfaces and powerful functionality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies to improve search rankings, increase organic traffic, and maximize online visibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Shopify Store Development",
    description: "Custom Shopify store design and development with optimized product showcases, secure checkout, and seamless user experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-bottom, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-webascend-light">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-64 h-64 bg-webascend-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-webascend-purple/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-webascend-purple uppercase tracking-wider bg-webascend-purple/10 px-4 py-1 rounded-full mb-4 reveal-bottom">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal-bottom">
            Comprehensive <span className="gradient-text">Digital Solutions</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-700 reveal-bottom">
            We offer a wide range of digital services to help your business grow, reach new audiences, and achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card flex flex-col items-center text-center reveal-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-webascend-blue to-webascend-purple text-white">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-700 mb-4">{service.description}</p>
              
              <div className="mt-auto">
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 reveal-bottom">Our Development Process</h3>
          <p className="max-w-2xl mx-auto text-gray-700 reveal-bottom">
            We follow a systematic approach to deliver exceptional results for every project.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 hidden md:block">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-webascend-blue to-webascend-purple rounded-full"></div>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Discovery & Planning",
                description: "We analyze your requirements, target audience, and competition to develop a strategic plan."
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                ),
                title: "Design & Development",
                description: "Our team designs and develops custom solutions tailored to your specific business needs."
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Testing & Deployment",
                description: "We thoroughly test and deploy your solution, ensuring everything works perfectly."
              }
            ].map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center reveal-bottom" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-webascend-blue to-webascend-purple flex items-center justify-center text-white mb-4 z-10 relative shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full -z-10 shadow-sm"></div>
                </div>
                
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
