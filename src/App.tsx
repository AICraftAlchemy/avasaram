import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import FilterSidebar from './components/FilterSidebar';
import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { Job } from './types';
import jobsData from './data/jobs.json';

function App() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData.jobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'salary'>('relevance');

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    window.history.pushState({}, '', `/job/${job.id}`);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    window.history.pushState({}, '', '/');
  };

  const handleFilter = (filters: any) => {
    const filtered = jobsData.jobs.filter(job => {
      return (
        (!filters.role || job.title.toLowerCase().includes(filters.role.toLowerCase())) &&
        (!filters.type || job.type === filters.type) &&
        (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.experienceLevel || job.experienceLevel >= parseInt(filters.experienceLevel)) &&
        (!filters.salary || job.salaryRange[0] >= parseInt(filters.salary))
      );
    });
    setFilteredJobs(filtered);
    setIsFilterOpen(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtered = jobsData.jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };

  const handleSort = (sortType: 'relevance' | 'date' | 'salary') => {
    setSortBy(sortType);
    let sorted = [...filteredJobs];
    switch (sortType) {
      case 'date':
        sorted.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
        break;
      case 'salary':
        sorted.sort((a, b) => b.salaryRange[1] - a.salaryRange[1]);
        break;
      default:
        // Relevance sorting (default order)
        break;
    }
    setFilteredJobs(sorted);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <section className="mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 rounded-lg">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">Find Your Dream Job</h2>
                <p className="text-xl text-center mb-8">Discover opportunities that match your skills and aspirations</p>
                <form onSubmit={handleSearch} className="flex justify-center">
                  <div className="relative w-full max-w-2xl">
                    <input
                      type="text"
                      placeholder="Search for jobs, skills, or companies..."
                      className="w-full p-4 pr-12 rounded-full border-2 border-white bg-white bg-opacity-20 focus:bg-opacity-100 focus:text-gray-800 focus:outline-none transition-all duration-300"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Search className="text-indigo-200 hover:text-white transition-colors" />
                    </button>
                  </div>
                </form>
              </div>
            </section>

            <div className="flex flex-col md:flex-row gap-8">
              <aside className="md:w-1/4">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full mb-4 bg-indigo-600 text-white p-2 rounded-lg flex items-center justify-center md:hidden"
                >
                  <Filter className="mr-2" /> Filters
                </button>
                <FilterSidebar isOpen={isFilterOpen} onFilter={handleFilter} />
              </aside>

              <section className="md:w-3/4">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSort(e.target.value as 'relevance' | 'date' | 'salary')}
                      className="border rounded-md p-1 bg-white text-gray-800"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="date">Date</option>
                      <option value="salary">Salary</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} onClick={() => handleJobClick(job)} />
                  ))}
                </div>
              </section>
            </div>

            <InfoSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Avasaram</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button 
                  onClick={() => setActiveSection('home')} 
                  className={`hover:text-indigo-200 transition-colors ${activeSection === 'home' ? 'text-white font-bold' : 'text-indigo-200'}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveSection('about')} 
                  className={`hover:text-indigo-200 transition-colors ${activeSection === 'about' ? 'text-white font-bold' : 'text-indigo-200'}`}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveSection('contact')} 
                  className={`hover:text-indigo-200 transition-colors ${activeSection === 'contact' ? 'text-white font-bold' : 'text-indigo-200'}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {renderContent()}
      </main>

      <footer className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Avasaram. All rights reserved.</p>
        </div>
      </footer>

      {selectedJob && <JobModal job={selectedJob} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;