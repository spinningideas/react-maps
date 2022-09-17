import React from "react";
import { createRoot } from "react-dom/client";
import App from "App";

const rootAppContainer = document.getElementById("root");
const rootApp = createRoot(rootAppContainer as Element);
rootApp.render(<App />);
