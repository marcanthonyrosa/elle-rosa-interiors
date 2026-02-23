import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import posthog from 'posthog-js'

posthog.init('phc_BHIQDrEpBMTu5QQ6fD6mhPVlJ9gVJ79jEXxjcFSck8T', {
  api_host: 'https://us.i.posthog.com',
})

createRoot(document.getElementById("root")!).render(<App />);

