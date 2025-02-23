// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import NotiBell from './assets/NotiBell.png'
import SettingIMG from './assets/SettingsPic.png'
import SupportPage from './Support'
import './App.css'


function AboutPage(){
  return (
    <>
      <h1>Welcome Justin</h1>
      <p>Institution: University of New Haven
        <br /> Meal Plan: Charger Blue Meal Plan
      
      </p>
    </>
  );
}

const Notification = () => {
  return(
    <button> 
      <img
        src = {NotiBell}
        style ={{height:100, width:100}}
        alt = "Notification"
      />
      Notifications
    </button>
  );
}

const Settings = () => {
  return(
    <button>
      <img
        src = {SettingIMG}
        style ={{height:100, width:100}}
        alt = "Settings"
      />
      Settings
    </button>
  );
}

const SupportNAV = () => {
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/Support">Support Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}
//stuff
function App(){
  return (
    <>
      <div>
        <AboutPage />
        <Notification />
        <Settings />
        
      </div>
      <div>
        <SupportNAV />
      </div>
    </>
  );
}


export default App
