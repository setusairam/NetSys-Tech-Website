import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star,
  ArrowRight,
  Smartphone,
  Globe,
  Brain,
  Layers,
  Palette,
  BarChart3,
  PenTool,
  HelpCircle,
  Zap,
  Crown,
  Shield
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [selectedService, setSelectedService] = useState('all');
  const [isAnnual, setIsAnnual] = useState(false);

  const services = [
    { id: 'all', name: 'All Services', icon: Layers },
    { id: 'mobile', name: 'Mobile App Development', icon: Smartphone },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'ai', name: 'AI & ML Integration', icon: Brain },
    { id: 'fullstack', name: 'Full-Stack Solutions', icon: Layers },
    { id: 'uiux', name: 'UI/UX Design', icon: Palette },
    { id: 'data', name: 'Data Science', icon: BarChart3 },
    { id: 'content', name: 'Content Writing', icon: PenTool }
  ];

  const servicePlans = {
    mobile: [
      {
        name: 'Basic Mobile App',
        description: 'Simple mobile app for iOS or Android',
        monthlyPrice: 25000,
        annualPrice: 240000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Single Platform (iOS or Android)',
          'Up to 8 Screens',
          'Basic UI Components',
          'Local Data Storage',
          'Basic Authentication',
          'App Store Submission',
          '60 Days Support',
          'Source Code Included'
        ],
        limitations: [
          'No Backend Integration',
          'No Push Notifications',
          'No Advanced Features'
        ]
      },
      {
        name: 'Professional Mobile App',
        description: 'Cross-platform app with backend integration',
        monthlyPrice: 50000,
        annualPrice: 480000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Cross-Platform (iOS & Android)',
          'Up to 15 Screens',
          'Custom UI/UX Design',
          'Backend API Integration',
          'Push Notifications',
          'Social Media Login',
          'Payment Gateway Integration',
          'Real-time Features',
          '90 Days Support',
          'App Store Optimization'
        ],
        limitations: [
          'No AI/ML Features',
          'Limited Third-party Integrations'
        ]
      },
      {
        name: 'Enterprise Mobile App',
        description: 'Advanced mobile solution with AI/ML',
        monthlyPrice: 100000,
        annualPrice: 960000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'Cross-Platform with Native Features',
          'Unlimited Screens',
          'Advanced UI/UX with Animations',
          'Microservices Backend',
          'AI/ML Integration',
          'Advanced Analytics',
          'Offline Capabilities',
          'Enterprise Security',
          'DevOps & CI/CD',
          '180 Days Support',
          'Dedicated Project Manager'
        ],
        limitations: []
      }
    ],
    web: [
      {
        name: 'Basic Website',
        description: 'Professional website for small businesses',
        monthlyPrice: 15000,
        annualPrice: 144000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Up to 10 Pages',
          'Responsive Design',
          'Basic SEO Optimization',
          'Contact Forms',
          'Social Media Integration',
          'Basic Analytics',
          '30 Days Support',
          'Content Management System'
        ],
        limitations: [
          'No E-commerce',
          'No Advanced Features',
          'No Backend Development'
        ]
      },
      {
        name: 'Professional Website',
        description: 'Advanced website with custom features',
        monthlyPrice: 35000,
        annualPrice: 336000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Up to 25 Pages',
          'Custom Design & Development',
          'E-commerce Integration',
          'Advanced SEO',
          'User Authentication',
          'Database Integration',
          'Payment Processing',
          'Advanced Analytics',
          '90 Days Support',
          'Performance Optimization'
        ],
        limitations: [
          'No AI/ML Features',
          'Limited API Integrations'
        ]
      },
      {
        name: 'Enterprise Website',
        description: 'Full-scale web application',
        monthlyPrice: 75000,
        annualPrice: 720000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'Unlimited Pages',
          'Custom Web Application',
          'Advanced E-commerce',
          'Multi-language Support',
          'Advanced User Management',
          'API Development',
          'Third-party Integrations',
          'Cloud Infrastructure',
          'Security Auditing',
          '180 Days Support',
          'Scalable Architecture'
        ],
        limitations: []
      }
    ],
    ai: [
      {
        name: 'Basic AI Integration',
        description: 'Simple AI features for existing applications',
        monthlyPrice: 40000,
        annualPrice: 384000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Chatbot Integration',
          'Basic NLP Features',
          'Image Recognition',
          'Sentiment Analysis',
          'API Integration',
          'Documentation',
          '60 Days Support',
          'Basic Training'
        ],
        limitations: [
          'No Custom Model Development',
          'Limited Data Processing',
          'No Advanced Analytics'
        ]
      },
      {
        name: 'Advanced AI Solution',
        description: 'Custom AI/ML models and integration',
        monthlyPrice: 80000,
        annualPrice: 768000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Custom Model Development',
          'Advanced NLP & Computer Vision',
          'Predictive Analytics',
          'Real-time Processing',
          'Data Pipeline Setup',
          'Model Training & Optimization',
          'Cloud Deployment',
          '120 Days Support',
          'Comprehensive Training'
        ],
        limitations: [
          'No Enterprise-level Scaling'
        ]
      },
      {
        name: 'Enterprise AI Platform',
        description: 'Complete AI/ML infrastructure',
        monthlyPrice: 150000,
        annualPrice: 1440000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'End-to-end AI Platform',
          'Multiple Custom Models',
          'Advanced Deep Learning',
          'MLOps Implementation',
          'Scalable Infrastructure',
          'Real-time Analytics',
          'Enterprise Security',
          'Dedicated AI Team',
          '365 Days Support',
          'Ongoing Model Updates'
        ],
        limitations: []
      }
    ],
    fullstack: [
      {
        name: 'Startup Stack',
        description: 'Complete solution for startups',
        monthlyPrice: 45000,
        annualPrice: 432000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Frontend & Backend Development',
          'Database Design',
          'User Authentication',
          'Basic API Development',
          'Cloud Deployment',
          'Basic DevOps Setup',
          '90 Days Support',
          'Technical Documentation'
        ],
        limitations: [
          'No Microservices',
          'Limited Scalability',
          'No Advanced Features'
        ]
      },
      {
        name: 'Business Stack',
        description: 'Scalable solution for growing businesses',
        monthlyPrice: 85000,
        annualPrice: 816000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Modern Tech Stack',
          'Microservices Architecture',
          'Advanced Database Design',
          'RESTful & GraphQL APIs',
          'Third-party Integrations',
          'Advanced DevOps',
          'Performance Optimization',
          'Security Implementation',
          '120 Days Support',
          'Team Training'
        ],
        limitations: [
          'No AI/ML Integration'
        ]
      },
      {
        name: 'Enterprise Stack',
        description: 'Enterprise-grade full-stack solution',
        monthlyPrice: 150000,
        annualPrice: 1440000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'Enterprise Architecture',
          'Multi-tenant System',
          'Advanced Security',
          'AI/ML Integration',
          'Real-time Processing',
          'Global CDN Setup',
          'Disaster Recovery',
          'Compliance & Auditing',
          '365 Days Support',
          'Dedicated Team'
        ],
        limitations: []
      }
    ],
    uiux: [
      {
        name: 'Basic Design',
        description: 'Essential UI/UX for small projects',
        monthlyPrice: 10000,
        annualPrice: 96000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Up to 10 Screens',
          'Wireframes & Mockups',
          'Basic User Research',
          'Responsive Design',
          'Style Guide',
          'Basic Prototyping',
          '30 Days Support',
          'Design Files Included'
        ],
        limitations: [
          'No User Testing',
          'No Advanced Animations',
          'Limited Revisions'
        ]
      },
      {
        name: 'Professional Design',
        description: 'Complete UI/UX design solution',
        monthlyPrice: 25000,
        annualPrice: 240000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Up to 25 Screens',
          'User Research & Personas',
          'Interactive Prototypes',
          'Usability Testing',
          'Design System Creation',
          'Advanced Animations',
          'Accessibility Compliance',
          '60 Days Support',
          'Multiple Revisions'
        ],
        limitations: [
          'No Development Handoff'
        ]
      },
      {
        name: 'Enterprise Design',
        description: 'Complete design system and strategy',
        monthlyPrice: 50000,
        annualPrice: 480000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'Unlimited Screens',
          'Comprehensive User Research',
          'Advanced Prototyping',
          'A/B Testing Setup',
          'Complete Design System',
          'Brand Guidelines',
          'Development Handoff',
          'Team Training',
          '120 Days Support',
          'Ongoing Design Support'
        ],
        limitations: []
      }
    ],
    data: [
      {
        name: 'Basic Analytics',
        description: 'Essential data analysis and reporting',
        monthlyPrice: 20000,
        annualPrice: 192000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Data Collection Setup',
          'Basic Analytics Dashboard',
          'Standard Reports',
          'Data Visualization',
          'Basic Insights',
          'Monthly Reports',
          '60 Days Support',
          'Documentation'
        ],
        limitations: [
          'No Predictive Analytics',
          'No Custom Models',
          'Limited Data Sources'
        ]
      },
      {
        name: 'Advanced Analytics',
        description: 'Comprehensive data science solution',
        monthlyPrice: 45000,
        annualPrice: 432000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Advanced Data Pipeline',
          'Predictive Analytics',
          'Custom Dashboards',
          'Machine Learning Models',
          'Real-time Analytics',
          'Data Mining',
          'Statistical Analysis',
          '90 Days Support',
          'Training & Workshops'
        ],
        limitations: [
          'No Big Data Processing'
        ]
      },
      {
        name: 'Enterprise Analytics',
        description: 'Complete data science platform',
        monthlyPrice: 90000,
        annualPrice: 864000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'Big Data Processing',
          'Advanced ML/AI Models',
          'Real-time Streaming',
          'Data Lake Setup',
          'Advanced Visualization',
          'Automated Reporting',
          'Data Governance',
          'Dedicated Data Team',
          '180 Days Support',
          'Ongoing Optimization'
        ],
        limitations: []
      }
    ],
    content: [
      {
        name: 'Basic Content',
        description: 'Essential content for small businesses',
        monthlyPrice: 5000,
        annualPrice: 48000,
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        popular: false,
        features: [
          'Up to 20 Pages of Content',
          'SEO Optimization',
          'Basic Copywriting',
          'Social Media Posts (10/month)',
          'Content Strategy',
          'Basic Research',
          '30 Days Support',
          'Content Calendar'
        ],
        limitations: [
          'No Video Scripts',
          'No Technical Writing',
          'Limited Revisions'
        ]
      },
      {
        name: 'Professional Content',
        description: 'Comprehensive content strategy',
        monthlyPrice: 15000,
        annualPrice: 144000,
        icon: Shield,
        color: 'from-blue-500 to-purple-600',
        popular: true,
        features: [
          'Up to 50 Pages of Content',
          'Advanced SEO Strategy',
          'Blog Writing (8 posts/month)',
          'Social Media Content (30/month)',
          'Email Marketing Content',
          'Technical Documentation',
          'Video Scripts',
          '60 Days Support',
          'Performance Analytics'
        ],
        limitations: [
          'No Multilingual Content'
        ]
      },
      {
        name: 'Enterprise Content',
        description: 'Complete content marketing solution',
        monthlyPrice: 30000,
        annualPrice: 288000,
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        popular: false,
        features: [
          'Unlimited Content',
          'Multilingual Content',
          'Advanced Content Strategy',
          'White Papers & Case Studies',
          'Video & Podcast Scripts',
          'Press Releases',
          'Content Automation',
          'Dedicated Content Team',
          '90 Days Support',
          'Content Performance Optimization'
        ],
        limitations: []
      }
    ]
  };

  const faqs = [
    {
      question: 'How do I choose the right service and plan?',
      answer: 'We offer a free consultation to understand your requirements and recommend the best service and plan. You can also start with a basic plan and upgrade as your needs grow.'
    },
    {
      question: 'Can I combine multiple services?',
      answer: 'Absolutely! We offer custom packages that combine multiple services. Contact us for a personalized quote that includes all the services you need.'
    },
    {
      question: 'What is the typical project timeline?',
      answer: 'Timelines vary by service: Basic projects (4-6 weeks), Professional projects (8-12 weeks), Enterprise projects (16-24 weeks). We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, all plans include initial support. We also offer extended maintenance packages for ongoing updates, bug fixes, and feature enhancements.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, React Native, Node.js, Python, AI/ML frameworks, cloud platforms, and various databases based on your requirements.'
    },
    {
      question: 'Can I upgrade or modify my plan during development?',
      answer: 'Yes, you can upgrade your plan or add additional services at any time. We\'ll adjust the scope and timeline accordingly to meet your evolving needs.'
    }
  ];

  const getCurrentPlans = () => {
    if (selectedService === 'all') {
      return [
        {
          name: 'Starter Package',
          description: 'Perfect for small businesses and startups',
          monthlyPrice: 25000,
          annualPrice: 240000,
          icon: Zap,
          color: 'from-green-500 to-teal-500',
          popular: false,
          features: [
            'Choose 1 Service',
            'Basic Implementation',
            'Standard Support',
            'Documentation Included',
            '60 Days Support',
            'Source Code/Files Included'
          ],
          limitations: [
            'Single Service Only',
            'No Advanced Features',
            'Limited Customization'
          ]
        },
        {
          name: 'Professional Package',
          description: 'Ideal for growing businesses',
          monthlyPrice: 65000,
          annualPrice: 624000,
          icon: Shield,
          color: 'from-blue-500 to-purple-600',
          popular: true,
          features: [
            'Choose Up to 3 Services',
            'Advanced Implementation',
            'Priority Support',
            'Custom Integration',
            '120 Days Support',
            'Team Training Included',
            'Performance Optimization'
          ],
          limitations: [
            'Up to 3 Services Only'
          ]
        },
        {
          name: 'Enterprise Package',
          description: 'Complete solution for large organizations',
          monthlyPrice: 125000,
          annualPrice: 1200000,
          icon: Crown,
          color: 'from-purple-500 to-pink-500',
          popular: false,
          features: [
            'All Services Included',
            'Enterprise-grade Implementation',
            'Dedicated Support Team',
            'Custom Development',
            '365 Days Support',
            'Ongoing Consultation',
            'Scalable Architecture',
            'Advanced Security'
          ],
          limitations: []
        }
      ];
    }
    return servicePlans[selectedService] || [];
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Service{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Transparent pricing for all our services. Choose the perfect plan for your project needs.
            </p>
          </motion.div>

          {/* Service Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Select a Service to View Pricing
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-3 rounded-lg text-center transition-all transform hover:scale-105 ${
                      selectedService === service.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <service.icon className="h-6 w-6 mx-auto mb-2" />
                    <span className="text-xs font-medium">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-lg">
              <div className="flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    !isAnnual
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  One-time Payment
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-md font-medium transition-all relative ${
                    isAnnual
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Annual Package
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {services.find(s => s.id === selectedService)?.name} Pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the plan that best fits your project requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {getCurrentPlans().map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular
                    ? 'ring-2 ring-blue-500 transform scale-105'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    <Star className="inline-block h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className={`bg-gradient-to-r ${plan.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        {isAnnual ? '/year' : '/project'}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                        Save {formatPrice(plan.monthlyPrice * 12 - plan.annualPrice)} per year
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      What's included:
                    </h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center">
                        <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-400 text-sm line-through">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All plans include free consultation, project planning, and regular progress updates.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need a custom solution or multiple services? <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</Link> for a personalized quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your requirements and choose the perfect plan for your needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;