import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Calendar from "./calendar.jsx";
import Favorites from './Favorites.jsx'
import NewCalendar from "./NewCalendar.jsx";
// import Sheet from "./data.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NewCalendar />
      {/*<Favorites />*/}
  </StrictMode>,
)
