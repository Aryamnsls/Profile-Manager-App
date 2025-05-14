import React, { useState } from 'react';
import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    name: 'Alice Johnson',
    role: 'Software Engineer',
    location: 'New York',
    summary: 'Alice is an experienced software engineer specialized in frontend development.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Aryaman M Singha',
    role: 'SDE - 1',
    location: 'Banglore',
    summary: 'Aryaman leads product teams and drives agile development.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }, // ✅ <-- this comma was missing!
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    location: 'San Francisco',
    summary: 'Michael builds performant full-stack web apps and contributes to open-source.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Sara Lee',
    role: 'UI/UX Designer',
    location: 'London',
    summary: 'Sara designs delightful user experiences with Figma and Framer.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Raj Patel',
    role: 'DevOps Engineer',
    location: 'Delhi',
    summary: 'Raj automates cloud infrastructure using Terraform and Docker.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    name: 'Emily Clark',
    role: 'Data Scientist',
    location: 'Toronto',
    summary: 'Emily extracts insights from data using Python, Pandas, and ML models.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export default function App() {
  const [query, setQuery] = useState('');

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(query.toLowerCase()) ||
    profile.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Profile Viewer</h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name or location"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
          <p className="text-gray-600">No matching profiles found.</p>
        )}
      </div>
    </div>
  );
}
