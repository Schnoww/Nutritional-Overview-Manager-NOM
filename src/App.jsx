// App.jsx
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/common/Header"; // Import Header
import Sidebar from "./components/common/Sidebar"; // Import Sidebar

import SignUpPage from "./pages/SignUpPage"; // Import SignUpPage
import Login from "./pages/Login"; // Import Login
import OverviewPage from "./pages/OverviewPage"; // Import OverviewPage
import UsersPage from "./pages/UsersPage"; // Import UsersPage
import DiningPage from "./pages/Dining"; // Import DiningPage
import AnalyticsPage from "./pages/AnalyticsPage"; // Import AnalyticsPage
import AnnouncementsPage from "./pages/Announcements"; // Import AnnouncementsPage
import SettingsPage from "./pages/SettingsPage"; // Import SettingsPage
import DietPage from "./pages/DietaryTracking"; // Import DietPage
import CalendarPage from "./pages/CalendarPage"; // Import CalendarPage

function App() {
    return (
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
            <Sidebar /> {/* Render Sidebar */}
            <Routes>
                {/*Trying this */}
                <Route path="/" element={<Navigate to="/auth/signup" replace />} />

                {/*Auth Routes */}
                {/* <Route path="/auth/signup" element={<SignUpPage />} />
                <Route path="/auth/login" element={<Login />} /> */}

                {/* Application Routes */}
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/dining" element={<DiningPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/dietary_tracking" element={<DietPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </div>
    );
}

export default App;
