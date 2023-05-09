import { useEffect, useState, useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Result from "./Pages/Result/Result";

const Dashboard = lazy(() => import("./Pages/dashboard/Dashboard.jsx"));
const Home = lazy(() => import("./Pages/Home/Home"));
const ResetPass = lazy(() => import("./pages/ResetPassword/ResetPass"));
import Booking from "./Pages/Booking/Booking";
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Otp from "./Pages/OTP/Otp";
import AuthContext from "./context/AuthContext";
import ScrollToTop from "./hooks/ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const [count, setCount] = useState(0);
  const { auth, updateAuth } = useContext(AuthContext);

  useEffect(() => {
    const item = localStorage.getItem("auth");
    if (item) updateAuth(JSON.parse(item));
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/otp" element={<Otp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"  element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
