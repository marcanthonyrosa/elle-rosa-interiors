import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import posthog from 'posthog-js'

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: 'https://us.i.posthog.com',
})

createRoot(document.getElementById("root")!).render(<App />);

