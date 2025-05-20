
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jessica Thompson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "Since working with WebAscend on our website redesign, our conversion rate has increased by 37%. Their team took the time to understand our business goals and delivered a solution that exceeds our expectations. The SEO work they did has helped us rank #1 for several key industry terms.",
    platform: "LinkedIn"
  },
  {
    id: 2,
    name: "Daniel Kim",
    role: "Founder & CEO",
    company: "NexusApps",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "WebAscend developed our mobile app from concept to launch in just 3 months. Their agile approach and technical expertise were impressive. The app has a 4.8-star rating and 50,000+ downloads in its first quarter. Their post-launch support has been equally outstanding.",
    platform: "Google"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "E-Commerce Manager",
    company: "StyleHub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "Our Shopify store was underperforming until we hired WebAscend. They completely revamped our UX/UI, optimized product pages, and integrated critical analytics. Since the redesign, our abandoned cart rate dropped by 42% and overall sales have doubled. Highly recommend!",
    platform: "LinkedIn"
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Digital Director",
    company: "Global Services Ltd",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    content: "WebAscend's SEO strategy transformed our online presence. After 6 months, organic traffic increased by 215% and we're seeing a 3x ROI on our digital marketing spend. Their team provides detailed monthly reports that clearly show progress. They're true digital partners, not just service providers.",
    platform: "Google"
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
            Don't just take our word for it - see what our clients have to say about working with us.
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
                              {testimonial.platform === "LinkedIn" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect>
                                  <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                  <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
                                </svg>
                              )}
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
                            <div className="mt-2 flex items-center justify-center md:justify-start">
                              <span className="text-sm text-gray-500">via {testimonial.platform}</span>
                              <div className="ml-2 flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
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
        
        {/* Client Logos */}
        <div className="mt-24">
          <h4 className="text-center text-gray-500 mb-8 reveal-bottom">Trusted by innovative companies</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Google', 'Microsoft', 'Adobe', 'Shopify', 'Slack'].map((brand, index) => (
              <div 
                key={index} 
                className="w-32 h-16 bg-white/80 rounded-lg flex items-center justify-center reveal-bottom shadow-sm hover:shadow-md transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold text-gray-600">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
