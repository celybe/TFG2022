import Layout from "components/layout/Layout";
import About from "pages/home/About";
import Contact from "pages/home/Contact";
import Features from "pages/home/Features";
import Home from "pages/home/Home";
import Pricing from "pages/home/Pricing";
import Login from "pages/login/Login";
import SignUp from "pages/signup/SignUp";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* public routes */}
      <Route path="home" element={<Home />} />
      <Route path="features" element={<Features />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<SignUp />}></Route>
      {/* We want to protect these routes */}
      {/* catch all */}
      <Route path="*" element={<div>Not found</div>}></Route>
    </Routes>
  );
}

export default App;
