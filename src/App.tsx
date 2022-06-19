import Layout from "components/layout/Layout";
import "./App.sass";
import About from "pages/home/About";
import Contact from "pages/home/Contact";
import Features from "pages/home/Features";
import Home from "pages/home/Home";
import Pricing from "pages/home/Pricing";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";

import "./App.css";
import theme from "theme/Theme";
import Dashboard from "pages/dashboard/Dashboard";
import Tasks from "pages/tasks/Board";
import Calendar from "pages/calendar/Calendar";
import Main from "pages/main/Main";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <BrowserRouter>
          <Routes>
            <Route index element={<Layout />} />
            <Route path="home" element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="main/*" element={<Main />} />

            <Route path="*" element={<div>Not found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
