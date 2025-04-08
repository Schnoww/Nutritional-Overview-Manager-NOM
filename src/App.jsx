// Library imports
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// Style imports
import Sidebar from "./components/common/Sidebar";
// Page route imports
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage"; 
import DiningPage from "./pages/Dining"; 
import AnalyticsPage from "./pages/AnalyticsPage"; 
import SettingsPage from "./pages/SettingsPage"; 
import CalendarPage from "./pages/CalendarPage"; 
import TestPage from "./pages/TestPage";
// Resturant route imports
import Marketplace from "./components/dining/Marketplace";
import Fod from "./components/dining/Fod";
import Jazzmans from "./components/dining/Jazzmans";
import Moes from "./components/dining/Moes";
import Wow from "./components/dining/Wow";
import FavoritesPage from "./pages/FavoritesPage";

export default function App(){
    return (
        <div className='flex h-screen bg-gray-900 overflow-hidden'> {/* container for every pages background */}
            <Router>
                <Sidebar /> {/* Render Sidebar */}
                <Routes>
                    {/* Sidebar routes */}
                    <Route path="/" element={<OverviewPage />} />
                    <Route path="/dining" element={<DiningPage />} />
                    <Route path="/users" element={<SettingsPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/test" element={<TestPage />} />
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