
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  console.log("Index component rendering");

  useEffect(() => {
    // Update page title and meta information
    document.title = "WebAscend - Digital Agency for Growing Businesses";
    
    // Add smooth scroll behavior to the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize intersection observer for animation triggers
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
  
  // Button click handler for the "Book a Call" button
  const handleBookCall = () => {
    window.open('https://calendly.com/sankalpgour2', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-webascend-blue to-webascend-purple text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
