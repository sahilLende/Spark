import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./layouts/App";
import AuthProvider from "./context/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Dashboard from "./layouts/Dashboard";
import Accounts from "./pages/Accounts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="accounts" element={<Accounts />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
