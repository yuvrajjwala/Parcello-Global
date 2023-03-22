import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./Pages/dashboard/Dashboard.jsx"));
const Home = lazy(() => import("./Pages/Home/Home"));
import ResetPass from "./pages/ResetPassword/ResetPass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="/reset" element={<ResetPass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
