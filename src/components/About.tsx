
import React, { useEffect } from 'react';

const About: React.FC = () => {
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

  const stats = [
    { value: '100+', label: 'Happy Clients' },
    { value: '250+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
  ];

  const values = [
    { 
      title: 'Innovation',
      description: 'We embrace the latest technologies and creative approaches to deliver cutting-edge solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: 'Quality',
      description: 'We maintain the highest standards of quality in every aspect of our work.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: 'Client-Focused',
      description: 'We prioritize your needs and goals, ensuring our solutions align with your business objectives.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive your business forward.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-webascend-blue/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-webascend-purple/5 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-left space-y-6">
              <h2 className="inline-block text-sm font-semibold text-webascend-purple uppercase tracking-wider bg-webascend-purple/10 px-4 py-1 rounded-full mb-4 reveal-left">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal-left">
                We're a Team of <span className="gradient-text">Digital Innovators</span>
              </h3>
              
              <p className="text-gray-700 reveal-left">
                At WebAscend, we combine creativity, technology, and strategic thinking to deliver exceptional digital solutions that help businesses grow and succeed in the digital landscape.
              </p>
              
              <p className="text-gray-700 reveal-left">
                Founded with a passion for digital excellence, we've grown into a trusted partner for businesses of all sizes. Our team of experts is dedicated to delivering tailored solutions that address your unique challenges and goals.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 reveal-left">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white shadow-md">
                    <div className="text-2xl md:text-3xl font-bold text-webascend-purple">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-right">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-webascend-blue to-webascend-purple rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team at work" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-webascend-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold">Team WebAscend</h4>
                  <p>Passionate about digital excellence</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-webascend-cyan rounded-lg shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-webascend-light rounded-xl shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Company Values */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 reveal-bottom">Our Core Values</h3>
            <p className="max-w-2xl mx-auto text-gray-700 reveal-bottom">
              These principles guide everything we do and reflect our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="service-card flex flex-col items-center text-center reveal-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-webascend-blue to-webascend-purple text-white">
                  {value.icon}
                </div>
                
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
