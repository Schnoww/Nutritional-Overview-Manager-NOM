import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App /> 
			{/* <SignUpPage /> */}
			{/* <Login /> */}
			
		</BrowserRouter>
	</React.StrictMode>
);
