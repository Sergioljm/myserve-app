import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MobileHeader from "./components/Layout/MobileHeader";
import BottomNavigation from "./components/Layout/BottomNavigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import Bookings from "./pages/Bookings";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

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
