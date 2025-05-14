// App.jsx or ProfileList.jsx
import React, { useState, useEffect } from 'react';
import ProfileCard from "./components/ProfileCard";

const profiles = [
 {
    name: 'Alice Johnson',
    role: 'Software Engineer',
    location: 'New York',
    summary: 'Alice is an experienced software engineer specialized in frontend development.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    experience: 4
  },
  {
    name: 'Aryaman M Singha',
    role: 'SDE - 1',
    location: 'Bangalore',
    summary: 'Aryaman leads product teams and drives agile development.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    techStack: ['Java', 'Spring Boot', 'AWS'],
    experience: 2
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    location: 'San Francisco',
    summary: 'Michael builds performant full-stack web apps and contributes to open-source.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    techStack: ['Node.js', 'MongoDB', 'React'],
    experience: 5
  },
  {
    name: 'Sara Lee',
    role: 'UI/UX Designer',
    location: 'London',
    summary: 'Sara designs delightful user experiences with Figma and Framer.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    techStack: ['Figma', 'Framer', 'Sketch'],
    experience: 3
  },
  {
    name: 'Raj Patel',
    role: 'DevOps Engineer',
    location: 'Delhi',
    summary: 'Raj automates cloud infrastructure using Terraform and Docker.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    techStack: ['Docker', 'Terraform', 'Kubernetes'],
    experience: 6
  },
  {
    name: 'Emily Clark',
    role: 'Data Scientist',
    location: 'Toronto',
    summary: 'Emily extracts insights from data using Python, Pandas, and ML models.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    techStack: ['Python', 'Pandas', 'scikit-learn'],
    experience: 4
  }
];

export default function App() {
  const [query, setQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(query.toLowerCase()) ||
    profile.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} py-10 px-4`}>
      <div className="flex justify-between max-w-6xl mx-auto mb-4 items-center">
        <h1 className="text-3xl font-bold">Profile Viewer</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or location"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No matching profiles found.</p>
        )}
      </div>
    </div>
  );
}
