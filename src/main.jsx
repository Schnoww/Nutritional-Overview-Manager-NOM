import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/Managers/ThemeManager.jsx";
import App from "./App.jsx";
import "./index.css";
import "./Theme.css";

import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./components/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>		
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
				<ToastContainer />
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);
