import React from 'react';
import { Code2, Brain, Globe, Wrench, Database, TestTube } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={20} strokeWidth={1.5} />,
      skills: ['Python', 'JavaScript', 'SQL']
    },
    {
      title: 'AI/ML',
      icon: <Brain size={20} strokeWidth={1.5} />,
      skills: ['LangChain', 'Unsloth', 'PyTorch', 'Hugging Face', 'Ollama', 'MLX', 'Prompt Engineering']
    },
    {
      title: 'Web Development',
      icon: <Globe size={20} strokeWidth={1.5} />,
      skills: ['React.js', 'Vite', 'Tailwind CSS']
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={20} strokeWidth={1.5} />,
      skills: ['Git', 'Pandas', 'NumPy','Jupyter Notebook']
    },
    {
      title: 'Backend Development',
      icon: <Database size={20} strokeWidth={1.5} />,
      skills: ['Node.js', 'Express.js', 'MySQL', 'REST APIs', 'MongoDB', 'Flask']
    },
    {
      title: 'Testing',
      icon: <TestTube size={20} strokeWidth={1.5} />,
      skills: ['Pytest', 'Unit Testing']
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Technical Skills
          </h2>
          <div className="h-px w-16 bg-black mx-auto mb-6"></div>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Comprehensive expertise across modern development stack with focus on scalable web applications and AI practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`border border-gray-300 rounded-lg p-6 hover:border-black transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-black group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-black">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs font-light text-gray-700 bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 rounded hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

