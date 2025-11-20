import React, { useState } from 'react';
import { Brain, Code, Wrench, GraduationCap, X, Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [selectedExp, setSelectedExp] = useState(null);
  
  const experiences = [
    {
      title: 'AI Projects & Exploration',
      company: 'Independent',
      period: 'Present',
      icon: <Brain size={24} strokeWidth={1.5} />,
      description: 'Active exploration of cutting-edge AI technologies including local LLMs, voice AI, and advanced ML workflows. Currently learning model finetuning for local inference, building AI agents, and implementing RAG systems. Building production-ready applications while continuously expanding AI expertise.',
      skills: ['Local LLMs', 'Whisper', 'Claude', 'Python', 'Ollama', 'RAG', 'AI Agents', 'Model Finetuning']
    },
    {
      title: 'Controls Software Engineer',
      company: 'Jinetics Inc.',
      companyLinkedin: 'https://www.linkedin.com/company/jinetics-inc/posts/?feedView=all',
      period: '08/23 - 01/24',
      icon: <Code size={24} strokeWidth={1.5} />,
      description: 'Refactored legacy Python codebase, improving maintainability and performance. Enhanced modularity and implemented best practices and testing.',
      bullets: [
        'Refactored complex legacy codebase using Object-Oriented Programming (OOP) principles in Python improving code readability and maintainability by 25%.',
        'Enhanced modularity of the codebase by implementing protocols, inheritance and encapsulation resulting in a 20% reduction in redundancy.',
        'Developed unit tests using pytest, covering edge cases and ensuring component reliability across various scenarios.',
        'Utilized GitHub to manage version control, issue tracking and facilitating code reviews, improving collaboration and code quality.'
      ],
      skills: ['Python', 'OOP', 'pytest', 'Git', 'Code Refactoring']
    },
    {
        title: 'Full-Stack Developer',
        company: 'Independent',
        period: '06/22 - 07/23',
        icon: <Code size={24} strokeWidth={1.5} />,
        description: 'Earned full stack development certificate specializing in Python and MERN stack. Continued self-directed learning by building full-stack applications, implementing REST APIs, and creating dynamic web interfaces.',
        certification: 'Coding Dojo | Full-Stack Developer Certification in Python & MERN',
        projects: [
          {
            name: 'TravelMem',
            description: 'Travel memories social application using Python / Flask / MySQL',
            github: 'https://github.com/JaimeQuezadaJr/TravelMem',
            bullets: [
              'Employed Flask framework for fast implementation of dynamic features via Jinja2 template, integrating the Open Weather API for real-time weather updates.',
              'Secured user authentication with Bcrypt and implemented complex user relationships database for post interactions using MySQL.'
            ]
          },
          {
            name: 'nutrilog',
            description: 'Nutrition tracker application using MongoDB / Express.js / Node.js / React.js',
            github: 'https://github.com/JaimeQuezadaJr/nutrilog',
            bullets: [
              'Leveraged speed of single-page app development in React for fast, seamless UX and optimized RESTful API to increase throughput.',
              'Developed back-end with Express framework and MongoDB for their flexible structure and ease of data access.',
              'Integrated USDA FoodData API for nutrition data and applied JSON Web Token (JWT) for secure user authentication.'
            ]
          }
        ],
        skills: ['Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express', 'Flask', 'REST APIs', 'MySQL']
      },
    {
      title: 'CAD Engineer',
      company: 'Mission Bell Inc.',
      companyLinkedin: 'https://www.linkedin.com/company/missionbellmfg/posts/?feedView=all',
      period: '07/15 - 05/22',
      icon: <Wrench size={24} strokeWidth={1.5} />,
      description: 'CAD design, product development, and engineering optimization. Led product design and development projects while optimizing manufacturing processes and developed strong problem-solving skills.',
      roles: [
        {
          title: 'CAD Engineer',
          period: 'May 2016 - May 2022',
          bullets: [
            'Generated detailed 2D drawings and 3D models of all individual system components for custom millwork assemblies in AutoCAD.',
            'Promoted in summer of 2021 to train and manage an international team of 4 engineers responsible for detailed CAD shop drawings leading to a 25% increase in project outputs.',
            'Reduced project costs by 15% through careful evaluation of design trade-offs, including material selection, manufacturability and production efficiency.',
            'Created Bills of Materials (BOMs) improving material tracking efficiency and ensuring accurate procurement of components.',
            'Streamlined collaboration between stakeholders through effective communication, setting clear expectations and understanding stakeholder needs for each project reducing design revision cycles by 20%.'
          ]
        },
        {
          title: 'Junior Engineer',
          period: 'July 2015 - April 2016',
          bullets: [
            'Assisted senior engineers in producing 2D CAD shop drawings, reducing design errors by 10% and improving design revisions.',
            'Collaborated with project managers in preparing various items including cost estimation, project timelines and mockups.',
            'Managed project portfolios, documentation and updated with new design revisions.',
            'Promoted to CAD Engineer after 10 months without prior industry experience based on performance and contributions to team efficiency.'
          ]
        }
      ],
      skills: ['AutoCAD', '3D Modeling', 'Team Management', 'Design Optimization', 'BOMs', 'Project Management']
    },
    {
      title: 'Bachelor of Science in Mechanical Engineering',
      company: 'University of California, Davis',
      period: '2015',
      icon: <GraduationCap size={24} strokeWidth={1.5} />,
      description: 'Earned Bachelor of Science degree in Mechanical Engineering. Developed strong foundation in engineering principles, problem-solving, and analytical thinking.',
      skills: ['Engineering Fundamentals', 'Problem Solving', 'CAD Design', 'System Design']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Experience Timeline
          </h2>
          <div className="h-px w-16 bg-black mx-auto mb-6"></div>
          <p className="text-gray-500 font-light">
            My journey in engineering, software development, and AI.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white hidden md:block z-10 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}></div>
                
                {/* Card */}
                <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${isVisible ? (index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight') : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}>
                    <div 
                      onClick={() => (exp.bullets || exp.roles || exp.projects) && setSelectedExp(exp)}
                      className={`border border-gray-300 rounded-lg p-6 bg-white hover:border-black transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${(exp.bullets || exp.roles || exp.projects) ? 'cursor-pointer' : ''}`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 border border-gray-300 rounded-lg hover:border-black hover:scale-110 hover:rotate-12 transition-all duration-300">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-black mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-sm text-gray-500 font-light">
                              {exp.company}
                            </p>
                            {exp.companyLinkedin && (
                              <a
                                href={exp.companyLinkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-gray-400 hover:text-black transition-colors"
                                aria-label={`View ${exp.company} on LinkedIn`}
                              >
                                <Linkedin size={14} strokeWidth={1.5} />
                              </a>
                            )}
                          </div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-light">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 font-light leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-light text-gray-700 bg-gray-100 rounded hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {(exp.bullets || exp.roles || exp.projects) && (
                        <p className="text-xs text-gray-400 mt-4 font-light italic">
                          Click for details
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedExp && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedExp(null)}
          >
            <div 
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 border border-gray-300 rounded-lg">
                  {selectedExp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-black mb-2">
                    {selectedExp.title}
                  </h3>
                  <p className="text-base text-gray-500 font-light mb-1">
                    {selectedExp.company}
                  </p>
                  <p className="text-sm uppercase tracking-wider text-gray-400 font-light">
                    {selectedExp.period}
                  </p>
                </div>
              </div>

              {selectedExp.projects ? (
                <div className="mb-6 space-y-6">
                  {selectedExp.certification && (
                    <div className="pb-4 border-b border-gray-200">
                      <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-light">
                        Certification
                      </h4>
                      <p className="text-gray-700 font-light">
                        {selectedExp.certification}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-light">
                      Technical Projects
                    </h4>
                    <div className="space-y-6">
                      {selectedExp.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="border border-gray-200 rounded-lg p-4">
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="text-lg font-medium text-black">
                                {project.name}
                              </h5>
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 border border-gray-300 rounded hover:border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                                  aria-label="View on GitHub"
                                >
                                  <Github size={16} strokeWidth={1.5} />
                                </a>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 font-light">
                              {project.description}
                            </p>
                          </div>
                          <ul className="space-y-2">
                            {project.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="text-gray-600 font-light leading-relaxed text-sm flex items-start gap-2">
                                <span className="text-black mt-1">•</span>
                                <span className="flex-1">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedExp.roles ? (
                <div className="mb-6 space-y-8">
                  {selectedExp.roles.map((role, roleIndex) => (
                    <div key={roleIndex}>
                      <div className="mb-4 pb-2 border-b border-gray-200">
                        <h4 className="text-lg font-medium text-black mb-1">
                          {role.title}
                        </h4>
                        <p className="text-sm text-gray-400 font-light">
                          {role.period}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {role.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="text-gray-600 font-light leading-relaxed flex items-start gap-3">
                            <span className="text-black mt-1">•</span>
                            <span className="flex-1">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : selectedExp.bullets && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-light">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {selectedExp.bullets.map((bullet, index) => (
                      <li key={index} className="text-gray-600 font-light leading-relaxed flex items-start gap-3">
                        <span className="text-black mt-1">•</span>
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-light">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-light text-gray-700 bg-gray-100 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;

