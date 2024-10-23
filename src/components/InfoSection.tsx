import React from 'react';
import { Lightbulb, TrendingUp, Users, Globe, Zap, Shield } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mt-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Avasaram?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center backdrop-filter backdrop-blur-lg">
            <Lightbulb size={48} className="mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Discover Opportunities</h3>
            <p className="text-gray-100">Access a curated selection of job listings from top companies across various industries.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center backdrop-filter backdrop-blur-lg">
            <TrendingUp size={48} className="mx-auto mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-100">Find roles that match your skills and experience level to advance your professional journey.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center backdrop-filter backdrop-blur-lg">
            <Users size={48} className="mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Connect with Employers</h3>
            <p className="text-gray-100">Directly interact with potential employers and showcase your unique talents.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center backdrop-filter backdrop-blur-lg">
            <Globe size={48} className="mx-auto mb-4 text-pink-300" />
            <h3 className="text-xl font-semibold mb-2">Global Opportunities</h3>
            <p className="text-gray-100">Explore job openings from around the world, including remote positions.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center backdrop-filter backdrop-blur-lg">
            <Zap size={48} className="mx-auto mb-4 text-orange-300" />
            <h3 className="text-xl font-semibold mb-2">Advanced Matching</h3>
            <p className="text-gray-100">Our AI-powered algorithm ensures you find the most relevant job opportunities.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center backdrop-filter backdrop-blur-lg">
            <Shield size={48} className="mx-auto mb-4 text-teal-300" />
            <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
            <p className="text-gray-100">All job postings are thoroughly vetted to ensure legitimacy and quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;