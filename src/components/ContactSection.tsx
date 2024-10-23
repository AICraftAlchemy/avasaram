import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                content: "+91 7661081043",
                action: "tel:+917661081043"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                content: "avasaramconnect@gmail.com",
                action: "mailto:avasaramconnect@gmail.com"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Us",
                content: "Hyderabad, India",
                action: "https://maps.google.com"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4 text-indigo-600">{contact.icon}</div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.content}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form and Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-800">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="input-field"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="input-field"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="input-field"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="input-field"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-800">Connect With Us</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-gray-600">Available round the clock for your queries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="font-semibold">Pan-India Support</h4>
                    <p className="text-gray-600">Support in multiple Indian languages</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { name: 'LinkedIn', url: '#' },
                      { name: 'Twitter', url: '#' },
                      { name: 'Instagram', url: '#' },
                      { name: 'Facebook', url: '#' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="bg-indigo-100 p-3 rounded-full hover:bg-indigo-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-indigo-600">{social.name[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;