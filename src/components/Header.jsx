import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ArrowDown, Bot, Sparkles, MessageSquare, Cpu, Code } from 'lucide-react';

const Header = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeSkill, setActiveSkill] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const fullText = 'Developer';

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  // Skill card animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % 4);
    }, 2000); // Change card every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex items-center justify-center bg-white relative border-b border-gray-200">
      <div className="container mx-auto px-6 py-20 text-center max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4 animate-fadeIn" style={{ animationDuration: '1.5s' }}>
            <h1 className="text-6xl md:text-8xl font-light text-black tracking-tight">
              Jaime Quezada
            </h1>
            <div className="h-px w-24 bg-black mx-auto"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-light tracking-wide animate-fadeIn delay-300" style={{ animationDuration: '1.2s' }}>
            AI <span className="inline-block min-w-[140px] text-left">{text}<span className="border-r-2 border-gray-600 cursor-blink ml-1"></span></span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light animate-fadeIn delay-500" style={{ animationDuration: '1.2s' }}>
            I build intelligent applications and bridge engineering with AI.
          </p>
          
          {/* Core Skills */}
          <div className="pt-8 animate-fadeIn" style={{ animationDuration: '1.2s', animationDelay: '0.8s' }}>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-light">
              Core Expertise
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              <div className={`group flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-lg hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${activeSkill === 0 ? 'animate-skillPulse' : ''}`}>
                <Bot size={20} strokeWidth={1.5} className="text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-sm font-light text-gray-700">Ollama & Local LLMs</span>
              </div>
              <div className={`group flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-lg hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${activeSkill === 1 ? 'animate-skillPulse' : ''}`}>
                <Sparkles size={20} strokeWidth={1.5} className="text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-sm font-light text-gray-700">Prompt Engineering</span>
              </div>
              <div className={`group flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-lg hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${activeSkill === 2 ? 'animate-skillPulse' : ''}`}>
                <Code size={20} strokeWidth={1.5} className="text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-sm font-light text-gray-700">Python & AI Frameworks</span>
              </div>
              <div className={`group flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-lg hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${activeSkill === 3 ? 'animate-skillPulse' : ''}`}>
                <Cpu size={20} strokeWidth={1.5} className="text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-sm font-light text-gray-700">AI Application Development</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-12 animate-fadeIn" style={{ animationDuration: '1.2s', animationDelay: '1.2s' }}>
            <a
              href="mailto:jaimequezadajr@gmail.com"
              className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-all duration-300 group hover:scale-110"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm tracking-wide uppercase">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/jaimequezadajr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-all duration-300 group hover:scale-110"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm tracking-wide uppercase">LinkedIn</span>
            </a>
            <a
              href="https://github.com/JaimeQuezadaJr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-all duration-300 group hover:scale-110"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm tracking-wide uppercase">GitHub</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black hover:text-gray-600 transition-all duration-300 animate-bounce hover:scale-110"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} strokeWidth={1} />
        </button>
      </div>
    </header>
  );
};

export default Header;

