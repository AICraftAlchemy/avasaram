import React from 'react';
import { Target, Users, Zap, Award, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Avasaram
        </motion.h2>
        
        {/* Hero Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16 text-center"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-800">Revolutionizing Job Search in India</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Founded in 2024, Avasaram is more than just a job portal. We're a career ecosystem designed to empower both job seekers and employers through innovative technology and human-centric approaches.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "500+", label: "Companies" },
            { number: "1K+", label: "Jobs Posted" },
            { number: "98%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-indigo-800">Our Journey</h3>
          <div className="space-y-8">
            {[
              { year: "2024 Q1", title: "Founded", description: "Launched with a vision to transform job search in India" },
              { year: "2024 Q2", title: "AI Integration", description: "Introducing AI-powered job matching" },
              { year: "2024 Q3", title: "Mobile First", description: "Launching mobile apps for better accessibility" },
              { year: "2024 Q4", title: "Pan-India Expansion", description: "Expanding across major Indian cities" }
            ].map((event, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-24 text-right font-bold text-indigo-600">{event.year}</div>
                <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-12 h-12 text-indigo-600" />,
              title: "Our Mission",
              description: "To revolutionize job search in India by making quality opportunities accessible to everyone."
            },
            {
              icon: <Award className="w-12 h-12 text-indigo-600" />,
              title: "Our Values",
              description: "Innovation, integrity, and inclusivity drive everything we do."
            },
            {
              icon: <Globe className="w-12 h-12 text-indigo-600" />,
              title: "Our Vision",
              description: "To become India's most trusted platform for career growth and professional networking."
            }
          ].map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-indigo-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;