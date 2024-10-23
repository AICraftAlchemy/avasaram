import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onFilter: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onFilter }) => {
  const [filters, setFilters] = useState({
    role: '',
    type: '',
    location: '',
    experienceLevel: '',
    salary: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <aside className={`bg-white p-6 rounded-lg shadow-md ${isOpen ? 'block' : 'hidden md:block'}`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center text-indigo-600">
        <Sliders className="mr-2" />
        Refine Your Search
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 mb-2">Job Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={filters.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
            placeholder="e.g. Frontend Developer"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 mb-2">Job Type</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
            placeholder="e.g. New York"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-gray-700 mb-2">Experience Level</label>
          <input
            type="range"
            id="experienceLevel"
            name="experienceLevel"
            min="1"
            max="5"
            value={filters.experienceLevel}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Entry</span>
            <span>Junior</span>
            <span>Mid</span>
            <span>Senior</span>
            <span>Expert</span>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-700 mb-2">Minimum Salary</label>
          <input
            type="range"
            id="salary"
            name="salary"
            min="0"
            max="200000"
            step="10000"
            value={filters.salary}
            onChange={handleChange}
            className="w-full"
          />
          <div className="text-sm text-gray-600 mt-1">
            ${parseInt(filters.salary).toLocaleString()}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="skills" className="block text-gray-700 mb-2">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={filters.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
            placeholder="e.g. React, Python"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Apply Filters
        </button>
      </form>
    </aside>
  );
};

export default FilterSidebar;