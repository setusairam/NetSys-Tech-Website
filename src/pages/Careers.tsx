import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Briefcase,
  Heart,
  Coffee,
  Zap,
  Target,
  Award,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Globe,
  Laptop,
  Calendar
} from 'lucide-react';

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our frontend team to build cutting-edge web applications using React, TypeScript, and modern development practices.',
      requirements: [
        '5+ years of React development experience',
        'Strong TypeScript and JavaScript skills',
        'Experience with modern build tools (Vite, Webpack)',
        'Knowledge of state management (Redux, Zustand)',
        'Familiarity with testing frameworks (Jest, Cypress)'
      ],
      benefits: ['Health Insurance', 'Remote Work', '401k Matching', 'Learning Budget'],
      featured: true
    },
    {
      id: '2',
      title: 'Mobile App Developer (iOS/Android)',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Develop native mobile applications for iOS and Android platforms, working with cross-functional teams to deliver exceptional user experiences.',
      requirements: [
        '4+ years of mobile development experience',
        'Proficiency in Swift/Kotlin or React Native',
        'Experience with mobile app deployment',
        'Understanding of mobile UI/UX principles',
        'Knowledge of mobile testing frameworks'
      ],
      benefits: ['Health Insurance', 'Relocation Assistance', '401k Matching', 'Gym Membership'],
      featured: false
    },
    {
      id: '3',
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      description: 'Design and implement machine learning models and AI solutions to solve complex business problems for our clients.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        'Strong Python and ML framework experience',
        'Experience with TensorFlow, PyTorch, or similar',
        'Knowledge of cloud ML platforms (AWS, Azure)',
        'Understanding of MLOps and model deployment'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Conference Budget', 'Stock Options'],
      featured: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure reliable deployment processes.',
      requirements: [
        '3+ years of DevOps/Infrastructure experience',
        'Strong knowledge of AWS/Azure cloud platforms',
        'Experience with Docker and Kubernetes',
        'Proficiency in Infrastructure as Code (Terraform)',
        'Understanding of monitoring and logging tools'
      ],
      benefits: ['Health Insurance', 'Flexible Hours', '401k Matching', 'Home Office Setup'],
      featured: false
    },
    {
      id: '5',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'Create beautiful, intuitive user experiences and interfaces for web and mobile applications.',
      requirements: [
        '4+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating design process',
        'Understanding of user research methodologies',
        'Experience with design systems and prototyping'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Design Tools Budget', 'Creative Days'],
      featured: false
    },
    {
      id: '6',
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Lead product strategy and roadmap development, working closely with engineering and design teams.',
      requirements: [
        '5+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Excellent communication and leadership skills',
        'Technical background preferred'
      ],
      benefits: ['Health Insurance', 'Equity Package', 'Flexible PTO', 'Team Retreats'],
      featured: true
    },
    {
      id: '7',
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $80,000 + Commission',
      description: 'Generate and qualify leads, build relationships with prospects, and support the sales team in growing our client base.',
      requirements: [
        '2+ years of sales or business development experience',
        'Excellent communication and interpersonal skills',
        'Experience with CRM tools (Salesforce, HubSpot)',
        'Self-motivated and goal-oriented',
        'Interest in technology and software solutions'
      ],
      benefits: ['Health Insurance', 'Commission Structure', 'Remote Work', 'Sales Training'],
      featured: false
    },
    {
      id: '8',
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      description: 'Ensure client satisfaction and success by providing ongoing support, training, and strategic guidance.',
      requirements: [
        '3+ years of customer success or account management experience',
        'Strong relationship building and communication skills',
        'Experience with SaaS products and platforms',
        'Problem-solving and analytical abilities',
        'Project management experience preferred'
      ],
      benefits: ['Health Insurance', 'Professional Development', 'Flexible Schedule', 'Client Events'],
      featured: false
    }
  ];

  const departments = ['All', 'Engineering', 'Design', 'Product', 'Sales', 'Customer Success'];
  const locations = ['All', 'Remote', 'San Francisco, CA', 'Austin, TX', 'New York, NY', 'Chicago, IL'];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Laptop,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and home office setup budget'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-rate salaries, equity packages, and performance bonuses'
    },
    {
      icon: Coffee,
      title: 'Learning & Development',
      description: 'Conference budget, online courses, and dedicated learning time'
    },
    {
      icon: Calendar,
      title: 'Time Off',
      description: 'Unlimited PTO, sabbatical options, and company-wide mental health days'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Regular team events, retreats, and collaborative work environment'
    }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to client relationships.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe diverse teams working together create the best solutions.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We support our team members in achieving personal and professional fulfillment.'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Build the future of software development with us. We're looking for passionate, 
              talented individuals who want to make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-all">
                Learn About Our Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive work environment that helps you thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find your next opportunity and join our growing team of talented professionals.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Department Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none cursor-pointer"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none cursor-pointer"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow ${
                  job.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      {job.featured && (
                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:ml-6">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Expandable Requirements Section */}
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                    View Requirements
                  </summary>
                  <div className="mt-3 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No positions found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search criteria or check back later for new opportunities.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('All');
                  setSelectedLocation('All');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all transform hover:scale-105">
                Send Your Resume
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all">
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;