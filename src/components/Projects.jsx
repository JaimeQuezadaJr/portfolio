import React, { useState } from 'react';
import { MessageSquare, Mic, ShoppingCart, FileText, Code2, ExternalLink, X, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', title: '' });
  
  const projects = [
    {
      id: 1,
      title: 'RAG Document Assistant',
      icon: <FileText size={32} strokeWidth={1.5} />,
      description: 'Built a RAG (Retrieval-Augmented Generation) application that allows you to upload PDF documents while using local LLMs for information retrieval. Automatic chunking and embedding generation when documents are added or removed.',
      techStack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Ollama', 'React.js', 'Vite', 'Docker'],
      metrics: [
        'Upload and process PDF documents with automatic embedding generation',
        'Chat interface powered by local LLMs (Ollama) for privacy',
        'Fast vector search using FAISS for document retrieval',
        'Source citations for answers with document references'
      ],
      github: 'https://github.com/JaimeQuezadaJr/rag-env',
      hasVideo: false
    },
    {
      id: 2,
      title: 'Local LLM Assistant',
      icon: <MessageSquare size={32} strokeWidth={1.5} />,
      description: 'Built AIME (AI Messaging Expert) - a sophisticated assistant application that runs entirely on local infrastructure using Ollama. Accessible from any device on your home network, providing a personal AI assistant no matter what device you\'re on while maintaining complete data privacy.',
      techStack: ['Python', 'Ollama', 'Flask', 'React.js', 'LangChain', 'SQLAlchemy', 'Docker'],
      metrics: [
        'Cross-device accessibility via home network',
        'User-friendly graphical interface',
        'Conversation history & save functionality',
        'Powered by Llama 3.2 (optimized for device compatibility)',
        'Real-time streaming responses'
      ],
      github: 'https://github.com/JaimeQuezadaJr/ollama-test',
      videoDemo: 'https://drive.google.com/file/d/1i2r-7YIjVpM0Eh60imwSga4vwYff_5rT/preview',
      hasVideo: true
    },
    {
      id: 3,
      title: 'Real-time Transcription App',
      icon: <Mic size={32} strokeWidth={1.5} />,
      description: 'Developed a speech-to-text application utilizing OpenAI\'s Whisper model with Gradio interface. Features live transcription preview as you speak and accurate final output when recording stops.',
      techStack: ['Python', 'OpenAI Whisper', 'PyTorch', 'Gradio', 'SoundDevice'],
      metrics: [
        'Real-time microphone transcription with live preview',
        'Apple Silicon (MPS) hardware acceleration support',
        'Accurate final transcription on recording stop',
        'Export to .txt file format',
        'Multi-language support'
      ],
      github: 'https://github.com/JaimeQuezadaJr/whisper-live',
      videoDemo: 'https://drive.google.com/file/d/18OKN8q01Ia9nC3magIpQieQ1uWNAFC6F/preview',
      hasVideo: true
    },
    {
      id: 4,
      title: 'Full-Stack eCommerce Platform',
      icon: <ShoppingCart size={32} strokeWidth={1.5} />,
      description: 'Built a complete eCommerce platform leveraging AI-assisted development and advanced prompt engineering. Showcases rapid prototyping capabilities - delivering a production-ready full-stack application in 7 days, a timeline that traditionally takes 4+ weeks.',
      techStack: ['React.js', 'Node.js', 'Express', 'SQLite', 'Vercel'],
      metrics: [
        'Rapid AI-assisted development (7 days vs 30 days)',
        'Advanced prompt engineering for clean code generation',
        'Full eCommerce features: cart, checkout, user auth',
        'Production deployment on Vercel',
        'Responsive design with modern UI/UX'
      ],
      github: 'https://github.com/JaimeQuezadaJr/sleeve',
      demo: 'https://sleeve-min.vercel.app',
      hasVideo: false
    }
  ];

  const openVideoModal = (videoUrl, title) => {
    setVideoModal({ isOpen: true, videoUrl, title });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', title: '' });
  };

  const handleDemoClick = (e, project) => {
    if (project.hasVideo) {
      e.preventDefault();
      openVideoModal(project.videoDemo, project.title);
    }
  };

  return (
    <section id="projects" className="py-32 bg-white border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="h-px w-16 bg-black mx-auto mb-6"></div>
          <p className="text-gray-500 font-light max-w-3xl mx-auto">
            A selection of impactful AI projects showcasing local inference, natural language processing, and rapid application development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`border border-gray-300 rounded-lg overflow-hidden bg-white hover:border-black transition-all duration-500 flex flex-col hover:shadow-2xl hover:-translate-y-3 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }}
            >
              {/* Icon Section */}
              <div className="bg-gray-50 p-12 flex items-center justify-center border-b border-gray-200 group-hover:bg-gray-100 transition-colors">
                <div className="text-black hover:scale-125 hover:rotate-12 transition-all duration-500 animate-float">
                  {project.icon}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium text-black mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-light text-gray-700 bg-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Metrics/Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.metrics.map((metric, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 font-light text-sm">
                      <span className="text-black mt-0.5">•</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded hover:border-black transition-all duration-300 text-sm font-light hover:scale-105 hover:shadow-lg"
                  >
                    <Code2 size={16} strokeWidth={1.5} className="group-hover:scale-110" />
                    <span>Code</span>
                  </a>
                  {project.hasVideo ? (
                    <button
                      onClick={(e) => handleDemoClick(e, project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300 text-sm font-light hover:scale-105 hover:shadow-lg"
                    >
                      <Play size={16} strokeWidth={1.5} className="group-hover:scale-110" />
                      <span>Demo</span>
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300 text-sm font-light hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} className="group-hover:scale-110" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoModal.isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeVideoModal}
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-medium text-black">{videoModal.title} - Demo</h3>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={videoModal.videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

