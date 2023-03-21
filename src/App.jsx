import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
const Home = lazy(() => import("./Pages/Home/Home"));

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
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
