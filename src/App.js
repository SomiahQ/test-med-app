// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Notification from './Components/Notification/Notification'; // ✅ Import Notification
import ReviewForm from './Components/ReviewForm/ReviewForm'; // Import ReviewForm
import ProfileCard from './Components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/Login" element={<Login />} />
         <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/notification" element={<Notification />} /> {/* ✅ Notification route */}
          <Route
            path="/review"
            element={<ReviewForm doctorName="Dr. Smith" appointmentDate="2025-04-30" onSubmitFeedback={(data) => console.log(data)} />}
          />
          <Route path="/profile" element={<ProfileCard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;