
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "WebAscend completely transformed our online presence. Their web development team created a beautiful, responsive website that has significantly increased our conversions. The SEO work they did helped us achieve top rankings for our most important keywords."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "NexusApps",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "The mobile app developed by WebAscend for our startup has been a game-changer. They understood our vision perfectly and delivered an intuitive, feature-rich app that our users love. Their ongoing support has been equally impressive."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "E-Commerce Manager",
    company: "StyleHub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "Our Shopify store was struggling with conversions until we partnered with WebAscend. Their team redesigned the entire user experience and optimized our product pages. Our sales have increased by 200% since the relaunch."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Digital Director",
    company: "Global Services Ltd",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "WebAscend's SEO expertise has taken our organic search presence to new heights. Their data-driven approach and transparent reporting have made them a valued partner. I highly recommend their services to any business looking to grow online."
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative bg-gradient-to-br from-webascend-blue/10 to-webascend-purple/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-webascend-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-webascend-purple/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-webascend-purple uppercase tracking-wider bg-webascend-purple/10 px-4 py-1 rounded-full mb-4 reveal-bottom">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal-bottom">
            What Our <span className="gradient-text">Clients Say</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-700 reveal-bottom">
            We're proud of the results we've achieved for our clients. Here's what they have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/4 flex-shrink-0">
                          <div className="relative">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-webascend-blue to-webascend-purple rounded-full flex items-center justify-center text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-3/4 text-center md:text-left">
                          <svg className="h-8 w-8 text-webascend-purple/30 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          
                          <p className="text-gray-700 text-lg mb-6">{testimonial.content}</p>
                          
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-gradient-to-r from-webascend-blue to-webascend-purple w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Brands/Clients */}
        <div className="mt-24">
          <h4 className="text-center text-gray-500 mb-8 reveal-bottom">Trusted by innovative companies</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Brand', 'Brand', 'Brand', 'Brand', 'Brand'].map((_, index) => (
              <div 
                key={index} 
                className="w-32 h-16 bg-white/50 rounded-lg flex items-center justify-center reveal-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-8 bg-gray-200/50 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
