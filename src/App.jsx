import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GreetingPage from "./components/pages/GreetingPage";
import SignIn from "./components/Auth/SignIn";
import Signup from "./components/Auth/SignUp";
import ResetPassword from "./components/Auth/ResetPassword";
import GetStarted from "./components/pages/GetStarted";
import Dashboard from "./components/pages/Dashboard";

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
