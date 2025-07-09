
import React, { useEffect } from 'react';

const Contact: React.FC = () => {
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

  const handleBookCall = () => {
    window.open('https://calendly.com/sankalpgour2', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-webascend-blue/5 via-webascend-purple/5 to-webascend-cyan/5"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-webascend-cyan/10 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-webascend-purple uppercase tracking-wider bg-webascend-purple/10 px-4 py-1 rounded-full mb-4 reveal-bottom">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal-bottom">
            Ready to <span className="gradient-text">Elevate Your Business</span>?
          </h3>
          <p className="max-w-2xl mx-auto text-gray-700 reveal-bottom">
            Let's discuss how WebAscend can help you achieve your business goals with our comprehensive digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 reveal-left">
            <h4 className="text-2xl font-bold mb-6">Send us a message</h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webascend-purple focus:border-webascend-purple"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webascend-purple focus:border-webascend-purple"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webascend-purple focus:border-webascend-purple"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webascend-purple focus:border-webascend-purple"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-webascend-blue to-webascend-purple text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between reveal-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>

              <div className="space-y-6">
                <div className="flex flex-col items-start gap-4">
                  <div className='flex flex-row gap-2 '>
                    <div className="w-10 h-10 rounded-full bg-webascend-purple/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-webascend-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <a href="mailto:sankalpgour2@gmail.com" className="text-gray-700 hover:text-webascend-blue transition-colors">support@webascend.co.in</a>
                    </div>
                  </div>
                  {/* twitter */}
                  <div className='flex flex-row gap-2 '>
                    <div className="w-10 h-10 rounded-full bg-webascend-purple/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.53 2H21L14.4 10.09L22.14 22H15.61L10.6 15.38L4.87 22H1.4L8.39 13.27L1 2H7.66L12.3 8.97L17.53 2Z" />
                      </svg>


                    </div>
                    <div>
                      <a href="https://x.com/Webascend_" className="text-gray-700 hover:text-webascend-blue transition-colors">Twitter for Web Ascend</a>
                    </div>
                  </div>
                  {/* insta */}
                  <div className='flex flex-row gap-2 '>
                    <div className="w-10 h-10 rounded-full bg-webascend-purple/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.75a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Zm4.88-.38a.88.88 0 1 1 0 1.75a.88.88 0 0 1 0-1.75Z" />
                      </svg>

                    </div>
                    <div>
                      <a href="https://www.instagram.com/webascend_/?utm_source=ig_web_button_share_sheet" className="text-gray-700 hover:text-webascend-blue transition-colors">Instagram for Web Ascend</a>
                    </div>
                  </div>
                  {/* facebook */}
                  <div className='flex flex-row gap-2 '>
                    <div className="w-10 h-10 rounded-full bg-webascend-purple/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.3V12h2.3v-1.68c0-2.27 1.35-3.52 3.42-3.52.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42V12h2.5l-.4 2.88h-2.1v6.99A10 10 0 0 0 22 12z" />
                      </svg>

                    </div>
                    <div>
                      <a href="https://www.facebook.com/share/16A5e3ys9r" className="text-gray-700 hover:text-webascend-blue transition-colors">Facebook for Web Ascend</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-webascend-blue to-webascend-purple rounded-2xl shadow-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Schedule a Consultation</h4>
              <p className="mb-6">Book a call with our team to discuss your project requirements and how we can help.</p>
              <button
                onClick={handleBookCall}
                className="w-full px-6 py-3 bg-white text-webascend-purple font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
