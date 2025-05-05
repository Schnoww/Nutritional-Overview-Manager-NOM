// Library imports
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// Style imports
import Sidebar from "./components/common/Sidebar";
// Route imports
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage"; 
import FavoritesPage from "./pages/FavoritesPage";
import DiningPage from "./pages/Dining"; 
import AnalyticsPage from "./pages/AnalyticsPage"; 
import AnnouncementsPage from "./pages/Announcements"; 
import SettingsPage from "./pages/SettingsPage"; 
import DietPage from "./pages/DietaryTracking"; 
import CalendarPage from "./pages/CalendarPage"; 
import Marketplace from "./components/dining/Marketplace";
import Fod from "./components/dining/Fod";
import Jazzmans from "./components/dining/Jazzmans";
import Moes from "./components/dining/Moes";
import Wow from "./components/dining/Wow";

export default function App(){
    return (
        <div className='flex h-screen bg-gray-900 overflow-hidden'> {/* container for every pages background */}
            <Router>
                <Sidebar /> {/* Render Sidebar */}
                <Routes>
                    {/* Sidebar routes */}
                    <Route path="/" element={<OverviewPage />} />
                    <Route path="/dining" element={<DiningPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/announcements" element={<AnnouncementsPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/dietary_tracking" element={<DietPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    {/* Dining routes */}
                    <Route path="/dining/marketplace" element={<Marketplace />} />
                    <Route path="/dining/fod" element={<Fod />} />
                    <Route path="/dining/jazzmans" element={<Jazzmans />} />
                    <Route path="/dining/moes" element={<Moes />} />
                    <Route path="/dining/wow" element={<Wow />} />
                </Routes>
            </Router>    
        </div>
    )
}