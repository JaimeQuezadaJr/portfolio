import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-32 bg-white border-b border-gray-200" ref={ref}>
      <div className={`container mx-auto px-6 max-w-2xl ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Contact
          </h2>
          <div className="h-px w-16 bg-black mx-auto mb-8"></div>
          <p className="text-gray-500 font-light leading-relaxed">
            Let's collaborate on your next AI project or discuss opportunities.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:jaimequezadajr@gmail.com"
            className="flex items-center gap-3 text-black hover:text-gray-600 transition-all duration-300 group hover:scale-110"
          >
            <Mail size={20} strokeWidth={1.5} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
            <span className="text-sm font-light">jaimequezadajr@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/jaimequezadajr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-black hover:text-gray-600 transition-all duration-300 group hover:scale-110"
          >
            <Linkedin size={20} strokeWidth={1.5} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
            <span className="text-sm font-light">linkedin.com/in/jaimequezadajr</span>
          </a>

          <a
            href="https://github.com/JaimeQuezadaJr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-black hover:text-gray-600 transition-all duration-300 group hover:scale-110"
          >
            <Github size={20} strokeWidth={1.5} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
            <span className="text-sm font-light">github.com/JaimeQuezadaJr</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

