import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Brain, 
  Server,
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Code2,
  Database,
  Brush,
  LineChart,
  Pencil,
  Code
} from 'lucide-react';

const Product: React.FC = () => {
  const services = [
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Flutter',
      shortTitle: 'Mobile Apps',
      description: 'Create stunning, high-performance mobile applications that engage users and drive business growth. Our expert team delivers native apps with seamless user experiences.',
      features: [
        'Native Flutter',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Offline Functionality',
        'User Centric UI'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase'],
      gradient: 'from-blue-500 to-cyan-500',
      timeline: [
        { phase: 'Planning & Design', duration: '2-3 weeks' },
        { phase: 'Development', duration: '8-16 weeks' },
        { phase: 'Testing & Launch', duration: '3-4 weeks' }
      ]
    },
    {
      id: 'web',
      icon: Globe,
      title: 'Web Development',
      subtitle: 'Static, Modern & Responsive Websites',
      shortTitle: 'Web Development',
      description: 'Build fast, scalable, and responsive web applications using cutting-edge technologies. From simple websites to complex web platforms, we deliver solutions that perform.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'SEO Optimization',
        'Performance Optimization'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'Express.js'],
      gradient: 'from-green-500 to-teal-500',
      timeline: [
        { phase: 'Planning & Design', duration: '1-2 weeks' },
        { phase: 'Development', duration: '4-8 weeks' },
        { phase: 'Testing & Launch', duration: '1-2 weeks' }
      ]
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI & ML Integration',
      subtitle: 'Intelligent Solutions',
      shortTitle: 'AI & ML',
      description: 'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications that adapt to user behavior.',
      features: [
        'Custom AI Model Development',
        'Smart ML Integration',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'YOLO'],
      gradient: 'from-purple-500 to-pink-500',
      timeline: [
        { phase: 'Research & Planning', duration: '2-4 weeks' },
        { phase: 'Model Development', duration: '6-12 weeks' },
        { phase: 'Testing & Optimization', duration: '2-3 weeks' }
      ]
    },
    {
      id: 'fullstack',
      icon: Server,
      title: 'Full-Stack Solutions',
      subtitle: 'End-to-End Development',
      shortTitle: 'Full-Stack',
      description: 'Complete software solutions from database design to user interface. We handle every aspect of your application development with modern technology stacks.',
      features: [
        'MERN Stack Development',
        'Database Design & Optimization',
        'RESTful API Development',
        'Authentication & Security',
        'Real-time Applications',
        'DevOps & Deployment'
      ],
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-indigo-500 to-purple-500',
      timeline: [
        { phase: 'Architecture & Planning', duration: '1-2 weeks' },
        { phase: 'Development', duration: '8-14 weeks' },
        { phase: 'Testing & Launch', duration: '2-3 weeks' }
      ]
    },
    {
      id: 'uiux',
      icon: Brush,
      title: 'UI/UX Design',
      subtitle: 'Intuitive and Engaging Interfaces',
      shortTitle: 'UI/UX Design',
      description: 'Craft beautiful, user-centric designs that enhance user experience and drive engagement. We focus on usability, accessibility, and visual storytelling to ensure your product resonates with your audience.',
      features: [
        'User Research & Persona Creation',
        'Wireframing & Prototyping',
        'Interactive UI Mockups',
        'Mobile-First & Responsive Design',
        'Accessibility (WCAG) Compliance',
        'User Testing & Feedback Analysis'
      ],
      technologies: ['Figma', 'Framer'],
      gradient: 'from-orange-500 to-red-500',
      timeline: [
        { phase: 'Research & Discovery', duration: '1-2 weeks' },
        { phase: 'Design & Prototyping', duration: '2-4 weeks' },
        { phase: 'Testing & Refinement', duration: '1-2 weeks' }
      ]
    },
    {
      id: 'datascience',
      icon: LineChart,
      title: 'Data Science',
      subtitle: 'Insights from Data That Drive Growth',
      shortTitle: 'Data Science',
      description: 'Leverage data to uncover patterns, make predictions, and optimize decision-making. Our data science solutions help you extract actionable insights using advanced analytics, machine learning, and statistical modeling.',
      features: [
        'Data Collection & Cleaning',
        'Exploratory Data Analysis (EDA)',
        'Predictive Modeling & Forecasting',
        'Machine Learning Algorithms',
        'Model Evaluation & Optimization',
        'Data Visualization & Dashboards'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Power BI', 'Tableau'],
      gradient: 'from-cyan-500 to-teal-500',
      timeline: [
        { phase: 'Data Collection & Analysis', duration: '2-3 weeks' },
        { phase: 'Model Development', duration: '4-8 weeks' },
        { phase: 'Validation & Deployment', duration: '2-3 weeks' }
      ]
    },
    {
      id: 'contentwriting',
      icon: Pencil,
      title: 'Content Writing',
      subtitle: 'Words That Resonate, Stories That Convert',
      shortTitle: 'Content Writing',
      description: 'We create captivating content that speaks your brands voice. From ghostwriting and storytelling to persuasive copy and SEO blogs, our writing elevates your presence, builds trust, and drives engagement.',
      features: [
        'Ghostwriting & Thought Leadership',
        'Creative Writing & Brand Storytelling',
        'SEO-Optimized Blog & Web Content',
        'Social Media & Campaign Copy',
        'Long-form Articles & Case Studies',
        'Tone-Adaptive Writing Style'
      ],
      technologies: ['Grammarly Pro', 'Frase', 'Surfer SEO', 'Hemingway', 'Notion', 'Google Docs'],
      gradient: 'from-rose-500 to-pink-600',
      timeline: [
      { phase: 'YouTube Script Writing', duration: '1–2 days' },
      { phase: 'Blog Article (800–1000 words)', duration: '1 day' },
      { phase: 'Website Page Copy', duration: '1–2 days' },
      { phase: 'Social Media Post Set (5–7 posts)', duration: '2 days' },
      { phase: 'Case Study / Long-form Article', duration: '3–4 days' },
      { phase: 'Email Newsletter', duration: '1 day' },
      { phase: 'Ad Copy (3–5 variants)', duration: '0.5–1 day' },
      { phase: 'Brand Story / About Page', duration: '2 days' }
    ]
    },
    {
      id: 'prompting',
      icon: Code,
      title: 'Prompt Engineering',
      subtitle: 'Precision Prompts, Powerful Outputs',
      shortTitle: 'Prompt Engineering',
      description: 'We engineer intelligent prompts that maximize the capabilities of large language models (LLMs). From data-driven prompt design to system message optimization and multi-turn interactions, our approach ensures accuracy, consistency, and optimal AI performance across applications.',
      features: [
        'Custom Prompt Design for LLMs',
        'Few-Shot & Zero-Shot Prompt Engineering',
        'Role-based System Messages',
        'Prompt Templates for Automation & APIs',
        'Chain of Thought & Toolformer Patterns',
        'Multi-turn Conversation Design'
      ],
      technologies: [
        'ChatGPT (OpenAI)', 
        'Claude (Anthropic)', 
        'Gemini (Google)', 
        'PromptLayer', 
        'LangChain', 
        'LLM Studio'
      ],
      gradient: 'from-blue-600 to-indigo-700',
      timeline: [
        { phase: 'Use Case Discovery & Task Framing', duration: '4–6 hours' },
        { phase: 'LLM Selection & Tool Alignment', duration: '3–4 hours' },
        { phase: 'Prompt Drafting (Few-shot / Zero-shot)', duration: '6–10 hours' },
        { phase: 'Evaluation, Testing & Refinement', duration: '5–8 hours' },
        { phase: 'Integration & PromptOps Setup', duration: '3–5 hours' }
      ]
    }    
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements, understand your business goals, and define the project scope.',
      icon: Zap
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create wireframes, prototypes, and design systems that align with your brand and user needs.',
      icon: Code2
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using agile methodologies with regular updates and feedback cycles.',
      icon: Database
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Launch your application with proper testing, optimization, and ongoing support.',
      icon: Shield
    }
  ];

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive software development services designed to transform your business 
              and accelerate your digital journey with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Jump to Service:
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Click to navigate ↓
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-2 min-w-max">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center p-4 min-w-[120px] rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-md hover:shadow-lg transition-all duration-300 group`}
                >
                  <service.icon className="h-6 w-6 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center leading-tight">
                    {service.shortTitle}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
                    <div className={`bg-gradient-to-r ${service.gradient} rounded-xl p-8 text-white`}>
                      <div className="text-center mb-6">
                        <service.icon className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                        <div className="text-sm opacity-90 mb-4">Project Timeline</div>
                        <div className="space-y-3">
                          {service.timeline.map((phase, phaseIndex) => (
                            <div key={phaseIndex} className="flex justify-between items-center">
                              <span className="text-sm">{phase.phase}</span>
                              <span className="text-sm font-medium">{phase.duration}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="text-xs opacity-75 italic">
                            *Timeline varies based on project complexity and requirements
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
              >
                <div className="text-6xl font-bold text-blue-100 dark:text-blue-900/30 mb-4">
                  {step.step}
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Product;