import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.jsx";
import "./index.css";
// import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";

// Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
