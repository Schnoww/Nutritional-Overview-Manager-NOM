// App.jsx
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/common/Header"; // Import Header
import Sidebar from "./components/common/Sidebar"; // Import Sidebar

import Login from "./pages/Login"; // Import Login
import SignUpPage from "./pages/SignUpPage"; // Import Sign Up

import UsersPage from "./pages/UsersPage"; // Import UsersPage
import DiningPage from "./pages/Dining"; // Import DiningPage
import AnalyticsPage from "./pages/AnalyticsPage"; // Import AnalyticsPage
import AnnouncementsPage from "./pages/Announcements"; // Import AnnouncementsPage
import SettingsPage from "./pages/SettingsPage"; // Import SettingsPage
import DietPage from "./pages/DietaryTracking"; // Import DietPage
import CalendarPage from "./pages/CalendarPage"; // Import CalendarPage

import Marketplace from "./components/dining/Marketplace";
import Fod from "./components/dining/Fod";
import Jazzmans from "./components/dining/Jazzmans";
import Moes from "./components/dining/Moes";
import Wow from "./components/dining/Wow";
import FavoritesPage from "./pages/FavoritesPage";
import { useAuth } from "./components/auth";


function App() {
	const {user} = useAuth();

    return (
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
				
						{user && <Sidebar /> }{/* Render Sidebar */}
            <Routes>
                {/*Trying this */}
                {!user ? <Route path="/" element={<Navigate to="/auth/login" replace />} /> : null }
								
								{/*Auth Routes */}
								<Route path="/auth/login" element={<Login />} />
                

                {/* Application Routes */}
                <Route path="/dining" element={<DiningPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/dietary_tracking" element={<DietPage />} />
								<Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/signup" element={<SignUpPage />} />

								<Route path="/dining/marketplace" element={<Marketplace />} />
                <Route path="/dining/fod" element={<Fod />} />
                <Route path="/dining/jazzmans" element={<Jazzmans />} />
                <Route path="/dining/moes" element={<Moes />} />
                <Route path="/dining/wow" element={<Wow />} />
            </Routes>
						
        </div>
    );
}

export default App;
