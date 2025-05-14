// // components/ProfileCard.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { BadgeCheck, Code, Clock } from 'lucide-react';

// export default function ProfileCard({ profile }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: 'easeOut' }}
//       className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 max-w-sm w-full transition-all hover:shadow-xl"
//     >
//       <img
//         src={profile.image}
//         alt={profile.name}
//         className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500 dark:border-blue-300"
//       />
//       <h2 className="text-xl font-semibold mt-4 text-center text-gray-800 dark:text-white">{profile.name}</h2>
//       <p className="text-sm text-center text-gray-500 dark:text-gray-300">{profile.role} • {profile.location}</p>
//       <p className="mt-3 text-gray-600 dark:text-gray-200 text-sm text-center">{profile.summary}</p>

//       {/* Badges Section */}
//       <div className="mt-4 flex flex-wrap gap-2 justify-center">
//         {profile.techStack?.map((tech, index) => (
//           <span key={index} className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
//             <Code className="w-3 h-3" /> {tech}
//           </span>
//         ))}
//         {profile.experience && (
//           <span className="bg-green-100 dark:bg-green-600 text-green-800 dark:text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
//             <Clock className="w-3 h-3" /> {profile.experience} yrs exp
//           </span>
//         )}
//       </div>
//     </motion.div>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Code, Clock } from 'lucide-react';
import MapComponent from './MapComponent';  // Import MapComponent

export default function ProfileCard({ profile }) {
  // Ensure the coordinates are available for each profile
  const lat = profile.locationCoordinates?.lat || 40.7128;  // Default: New York City latitude
  const lng = profile.locationCoordinates?.lng || -74.0060;  // Default: New York City longitude

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 max-w-sm w-full transition-all hover:shadow-xl"
    >
      <img
        src={profile.image}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500 dark:border-blue-300"
      />
      <h2 className="text-xl font-semibold mt-4 text-center text-gray-800 dark:text-white">{profile.name}</h2>
      <p className="text-sm text-center text-gray-500 dark:text-gray-300">{profile.role} • {profile.location}</p>
      <p className="mt-3 text-gray-600 dark:text-gray-200 text-sm text-center">{profile.summary}</p>

      {/* Map Component */}
      <div className="mt-4">
        <MapComponent
          lat={lat}
          lng={lng}
          address={profile.location}
        />
      </div>

      {/* Badges Section */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {profile.techStack?.map((tech, index) => (
          <span key={index} className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Code className="w-3 h-3" /> {tech}
          </span>
        ))}
        {profile.experience && (
          <span className="bg-green-100 dark:bg-green-600 text-green-800 dark:text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" /> {profile.experience} yrs exp
          </span>
        )}
      </div>
    </motion.div>
  );
}
