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
import ResetPass from "./Pages/ResetPassword/ResetPass.jsx";
const Dashboard = lazy(() => import("./Pages/dashboard/Dashboard.jsx"));
const Home = lazy(() => import("./Pages/Home/Home"));
import Booking from "./Pages/Booking/Booking";
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import EmailVerification from "./Pages/OTP/EmailVerification";
import AuthContext from "./context/AuthContext";
import ScrollToTop from "./hooks/ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Footer } from "./Components/Footer/Footer";
import Spinner from "./Components/Utils/Spinner";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Payment from "./Pages/payment/Payment";
import { SuccessfullPayment } from "./Pages/payment/SuccessfullPayment";
import ContactForm from "./Pages/Contact/Contact";
import OrderCancelled from "./Pages/payment/OrderCancelled.jsx";
// import AuthProvider from "./context/AuthProvider";

function App() {
  const [count, setCount] = useState(0);
  const { auth, updateAuth } = useContext(AuthContext);

  // useEffect(() => {
  //   const item = localStorage.getItem("item");
  //   if (item) {
  //     const storedAuth = JSON.parse(item);
  //     // console.log(item);
  //     updateAuth(storedAuth);
  //   }
  // }, [auth.isAuthenticated]);

  // useEffect(() => {
  //   console.log(isAuthenticated);
  // }, []);

  const app = {
    maxWidth: "1655px",
    display: "block",
    margin: "auto",
    boxShadow: "2px 2px 5px 5px #ededed",
  };
  return (
    <div style={app} className="App">
      <Router>
        {/* <AuthProvider> */}
        <ScrollToTop />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div>
                    <Spinner />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          {/* <Route
            path="/dashboard"
            element={
              <Suspense
                fallback={
                  <div>
                    <Spinner />
                  </div>
                }
              >
                <Dashboard />
              </Suspense>
            }
          /> */}
          <Route
            path="/reset"
            element={
              <Suspense
                fallback={
                  <div>
                    <Spinner />
                  </div>
                }
              >
                <ResetPass />
              </Suspense>
            }
          />

          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reviewOrder"
            element={
              <ProtectedRoute>
                <ReviewOrder />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/verify" element={<EmailVerification />} />
          <Route
            path="/result"
            element={
                <Result />
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactForm />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route
            path="/successfullorder/:id"
            element={
              <ProtectedRoute>
                <SuccessfullPayment />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/ordercancelled"
            element={
              <ProtectedRoute>
                <OrderCancelled />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/stripe" element={<Stripe />}></Route> */}
        </Routes>

        {/* {auth?.isAuthenticated ? (
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

            <Route path="/booking" element={<Booking />} />
            <Route path="/reviewOrder" element={<ReviewOrder />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/otp" element={<Otp />} />
            <Route path="*" element={<Navigate to="/signin" />} />
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        )} */}
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
