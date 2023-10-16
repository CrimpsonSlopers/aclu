import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@mui/material/styles";
import './src/index.css';

import App from "./src/App";
import { theme } from "./src/theme";


const root = createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <Analytics />
        <App />
    </ThemeProvider>
);