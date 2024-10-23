import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Calendar, Building, Award } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const formatSalary = (range: [number, number]) => {
    return `$${range[0].toLocaleString()} - $${range[1].toLocaleString()}`;
  };

  const getExperienceLabel = (level: number) => {
    const labels = ['Entry', 'Junior', 'Mid', 'Senior', 'Expert'];
    return labels[Math.min(level - 1, labels.length - 1)];
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-xl border-l-4 border-indigo-500"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-indigo-600">{job.title}</h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
        </div>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {job.type}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-500">
          <MapPin size={18} className="mr-2 text-indigo-500" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock size={18} className="mr-2 text-indigo-500" />
          <span>{getExperienceLabel(job.experienceLevel)} Level</span>
        </div>
        <div className="flex items-center text-gray-500">
          <DollarSign size={18} className="mr-2 text-indigo-500" />
          <span>{formatSalary(job.salaryRange)}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Calendar size={18} className="mr-2 text-indigo-500" />
          <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2 flex items-center">
          <Award size={18} className="mr-2 text-indigo-500" />
          Key Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors mt-4">
        View Details
      </button>
    </div>
  );
};

export default JobCard;