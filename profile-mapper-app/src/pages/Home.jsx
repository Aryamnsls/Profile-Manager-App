import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import SearchFilter from '../components/SearchFilter';
import Loader from '../components/Loader';
import mockProfiles from "../utils/data";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredProfiles = mockProfiles.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleSummaryClick = (profile) => {
    setSelected(profile.coordinates);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Profile Viewer</h1>
      <SearchFilter search={search} setSearch={setSearch} />
      {loading ? <Loader /> : (
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {filteredProfiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
          ))}
        </div>
      )}
      {selected && <MapComponent coordinates={selected} />}
    </div>
  );
}
