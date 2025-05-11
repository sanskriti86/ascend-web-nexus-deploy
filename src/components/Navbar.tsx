
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-webascend-blue to-webascend-purple flex items-center justify-center text-white font-bold text-xl">
              W
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-webascend-cyan animate-pulse-soft"></div>
          </div>
          <span className="text-xl font-bold">
            <span className="text-webascend-blue">Web</span>
            <span className="text-webascend-purple">Ascend</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-white bg-gradient-to-r from-webascend-blue to-webascend-purple"
                  : "text-gray-700 hover:text-webascend-blue"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mx-4 mt-2 py-2 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className={cn(
                "block px-4 py-2 text-sm font-medium transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-webascend-purple font-semibold"
                  : "text-gray-700 hover:text-webascend-blue"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
