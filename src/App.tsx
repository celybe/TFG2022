import {
  createMuiTheme,
  createTheme,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import About from "pages/home/About";
import Contact from "pages/home/Contact";
import Features from "pages/home/Features";
import Home from "pages/home/Home";
import Pricing from "pages/home/Pricing";
import Login from "pages/login/Login";
import SignUp from "pages/signup/SignUp";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
              </Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
