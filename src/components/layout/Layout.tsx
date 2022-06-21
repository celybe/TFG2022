import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

import About from "pages/home/About";
import Features from "pages/home/Features";
import Home from "pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navigation/Navbar";
export default function Layout() {
  const bg4 = useColorModeValue("#ffffff", "#000A0F");
  return (
    <Grid className="layout-content" templateColumns="repeat(1, 1fr)" bg={bg4}>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Home />
      </GridItem>
      <Routes>
        <Route path="features" element={<Features />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Grid>
  );
}
