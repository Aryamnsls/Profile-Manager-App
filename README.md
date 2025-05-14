# Profile-Manager-App
The Profile-Manager-App is a React.js-based web application that allows users to explore profiles and view their geographic locations on an interactive map. Each profile includes key details such as name, photo, and description. By integrating Google Maps or Mapbox,
Here’s a **step-by-step line-by-line guide** to set up your **Profile-Manager-App** using **React.js**, complete with ✨ **emojis** to keep things fun and engaging!

---

### ⚙️ Step 1: Set up your React App

```bash
npx create-react-app profile-manager-app
```

📦 Creates a new React project named `profile-manager-app`

```bash
cd profile-manager-app
```

📁 Move into the project directory

---

### 🧹 Step 2: Clean up boilerplate

Delete the following files for a cleaner setup:

```bash
rm src/App.test.js src/logo.svg src/reportWebVitals.js src/setupTests.js
```

Edit `src/App.css` and `src/index.css` or replace them with your own styling.

---

### 🎨 Step 3: Install necessary packages

```bash
npm install react-router-dom
```

📍 For routing and navigating between pages

```bash
npm install axios
```

🌐 For API calls and fetching profile data

```bash
npm install mapbox-gl react-map-gl
```

🗺️ For interactive maps with Mapbox (you can replace with Google Maps API if preferred)

```bash
npm install uuid
```

🆔 For generating unique IDs for profiles

---

### 🧱 Step 4: Set up file structure

```bash
mkdir src/components src/pages src/data src/styles
```

📂 Organize your project files like a pro!

---

### ✍️ Step 5: Create base components

* `src/components/ProfileCard.js`
* `src/components/ProfileMap.js`
* `src/components/SearchBar.js`
* `src/pages/Home.js`
* `src/pages/AdminDashboard.js`
* `src/pages/ProfileDetails.js`

Each component should have:

```jsx
import React from 'react';
```

Use functional components with hooks like `useState`, `useEffect`.

---

### 🛠️ Step 6: Enable Routing

In `src/App.js`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import ProfileDetails from './pages/ProfileDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}
```

---

### 🌍 Step 7: Setup Mapbox

* Create a `.env` file and add your Mapbox token:

```bash
REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here
```

* Use `react-map-gl` in your `ProfileMap.js`:

```jsx
import Map, { Marker } from 'react-map-gl';
```

---

### 🧪 Step 8: Add Dummy Data (Optional for testing)

Create `src/data/profiles.js` with dummy JSON objects:

```js
export const profiles = [
  {
    id: '1',
    name: 'Jane Doe',
    description: 'Frontend Developer',
    photo: '/images/jane.jpg',
    location: { lat: 37.7749, lng: -122.4194 }
  },
  ...
];
```

---

### 🔧 Step 9: Admin Panel Functionality

Add profile CRUD operations in `AdminDashboard.js` using local state or connect to Firebase/MongoDB later.

---

### 🔍 Step 10: Add Search & Filter Logic

In `SearchBar.js`, use `onChange` to filter the profiles by name, location, or keywords.

---

### 📱 Step 11: Make It Responsive

Use:

```bash
npm install tailwindcss
```

💅 Or apply responsive media queries in `App.css` for mobile/tablet support.

---

### 🚨 Step 12: Add Error Handling and Loaders

Use conditional rendering to handle:

* Loading states (`isLoading`)
* Error states (`try-catch` or `axios.catch`)

```jsx
{isLoading ? <Loader /> : <Map />}
```

---

### ✅ Step 13: Run the app!

```bash
npm start
```

🚀 You’re live on `http://localhost:3000`!

---

If you'd like, I can generate a ready-to-use boilerplate or create specific components for you — just say the word! 🎯
