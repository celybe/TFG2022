import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import Layout from "components/layout/Layout";
import About from "pages/home/About";
import Contact from "pages/home/Contact";
import Features from "pages/home/Features";
import Home from "pages/home/Home";
import Pricing from "pages/home/Pricing";
import Login from "pages/login/Login";
import SignUp from "pages/signup/SignUp";
import "./App.css";

test("renders learn react link", () => {
  const { getByText } = render(
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* public routes */}
      <Route path="home" element={<Home />} />
      <Route path="features" element={<Features />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      {/* We want to protect these routes */}
      {/* catch all */}
      <Route path="*" element={<div>Not found</div>}></Route>
    </Routes>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
