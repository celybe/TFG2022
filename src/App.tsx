import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import Layout from "components/layout/Layout";
import Contact from "pages/home/Contact";
import Pricing from "pages/home/Pricing";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";

import Not from "pages/home/Not";
import Main from "pages/main/Main";
import theme from "theme/Theme";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <BrowserRouter>
          <Routes>
            <Route index element={<Layout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="main/*" element={<Main />} />
            <Route path="*" element={<Not />}></Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
