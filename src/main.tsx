
// Set dark mode as default on first load
if (typeof document !== "undefined") {
	document.documentElement.classList.add("dark");
}

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
