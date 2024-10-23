import React from 'react';
import { X, Briefcase, MapPin, Clock, DollarSign, CheckCircle, Calendar, Building, Award } from 'lucide-react';
import { Job } from '../types';

interface JobModalProps {
  job: Job;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const formatSalary = (range: [number, number]) => {
    return `$${range[0].toLocaleString()} - $${range[1].toLocaleString()}`;
  };

  const getExperienceLabel = (level: number) => {
    const labels = ['Entry', 'Junior', 'Mid', 'Senior', 'Expert'];
    return labels[Math.min(level - 1, labels.length - 1)];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-indigo-600">{job.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin size={18} className="mr-2" />
              <span>{job.location}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Briefcase size={18} className="mr-2 text-indigo-500" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={18} className="mr-2 text-indigo-500" />
              <span>{getExperienceLabel(job.experienceLevel)} Level</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign size={18} className="mr-2 text-indigo-500" />
              <span>{formatSalary(job.salaryRange)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={18} className="mr-2 text-indigo-500" />
              <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Building size={18} className="mr-2 text-indigo-500" />
              <span>{job.companySize} employees</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Award size={18} className="mr-2 text-indigo-500" />
              <span>{job.industry}</span>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Job Description</h4>
            <p className="text-gray-700">{job.description}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Requirements</h4>
            <ul className="list-disc list-inside text-gray-700">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Benefits</h4>
            <ul className="grid grid-cols-2 gap-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle size={18} className="mr-2 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center font-semibold"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobModal;