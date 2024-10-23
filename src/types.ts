export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experienceLevel: number;
  salaryRange: [number, number];
  description: string;
  requirements: string[];
  benefits: string[];
  applyUrl: string;
  skills: string[];
  postedDate: string;
  companySize: string;
  industry: string;
}