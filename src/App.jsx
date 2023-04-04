import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Result from "./Pages/Result/Result";

const Dashboard = lazy(() => import("./Pages/dashboard/Dashboard.jsx"));
const Home = lazy(() => import("./Pages/Home/Home"));
const ResetPass = lazy(() => import("./pages/ResetPassword/ResetPass"));
import Booking from "./Pages/Booking/Booking";
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";

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
           <Route
            path="/reset"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ResetPass />
              </Suspense>
            }
          />
          <Route path="/result" element={<Result />}></Route>
          <Route path="/booking" element={<Booking />} />
          <Route path="/reviewOrder" element={<ReviewOrder />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
