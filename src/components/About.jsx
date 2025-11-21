import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Zap, Layers, Code, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-32 bg-white border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
              About Me
            </h2>
            <div className="h-px w-16 bg-black mx-auto"></div>
          </div>
        
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile Image */}
            <div className={`flex-shrink-0 mx-auto md:mx-0 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="w-64 overflow-hidden border border-gray-300 rounded-lg hover:border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="./profile.jpeg" 
                  alt="Jaime Quezada" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className={`space-y-6 flex-1 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <p className="text-lg text-gray-600 leading-relaxed font-light hover:text-gray-800 transition-colors duration-300">
                I'm a passionate technologist with a unique journey from mechanical engineering 
                to AI and software development. With 7 years of experience in mechanical 
                engineering, I've developed a strong foundation in problem-solving, optimization, 
                and systems thinking.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light hover:text-gray-800 transition-colors duration-300">
                Since then, I've been independently exploring the fascinating world of AI, specifically Large 
                Language Models, voice transcription, and intelligent application development. Today, I specialize in rapid AI-assisted development to build, prototype, and iterate on ideas at high speed. I'm highly skilled in prompt engineering and using LLMs as collaborative coding partners to generate clean, reliable code while experimenting with new concepts. My experience includes leveraging modern AI tools like Ollama, OpenAI Whisper and Claude to build local LLM assistants, real-time voice transcription tools and AI application development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light hover:text-gray-800 transition-colors duration-300">
                I'm passionate about exploring the full spectrum of AI deployment strategies—from cloud-based APIs to on-device and self-hosted models. Understanding the tradeoffs between approaches allows me to architect solutions that balance performance, privacy, cost, and scalability based on project requirements. My engineering background combined with software experience allows me to approach AI development with both creativity and precision.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start group">
                  <div className="p-3 border border-gray-300 rounded group-hover:border-black transition-colors flex-shrink-0">
                    <Zap size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-black mb-1">
                      Rapid AI Development
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      Specialized in AI-assisted development using Cursor and Claude for fast prototyping
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 border border-gray-300 rounded group-hover:border-black transition-colors flex-shrink-0">
                    <Layers size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-black mb-1">
                      Flexible Architecture
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      Experience with cloud APIs and local LLMs to choose the right deployment for each use case
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 border border-gray-300 rounded group-hover:border-black transition-colors flex-shrink-0">
                    <Sparkles size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-black mb-1">
                      Prompt Engineering
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      Advanced skills in directing LLMs to build creative, reliable applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

