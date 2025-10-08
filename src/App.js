import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MobileHeader from "./components/Layout/MobileHeader.jsx";
import BottomNavigation from "./components/Layout/BottomNavigation.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ProfessionalProfile from "./pages/ProfessionalProfile.jsx";
import Bookings from "./pages/Bookings.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
      </Routes>
    );
  }

  return (
    <>
      <MobileHeader />
      <main className="pt-14 pb-20 min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/professional/:id" element={<ProfessionalProfile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <BottomNavigation />
    </>
  );
};

function App() {
  return (
    <div className="App bg-white min-h-screen">
      <BrowserRouter>
        <div className="max-w-sm mx-auto bg-white min-h-screen relative shadow-xl">
          <AppLayout />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
