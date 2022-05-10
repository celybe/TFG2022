import { Grid } from "@mui/material";
import About from "pages/home/About";
import Contact from "pages/home/Contact";
import Features from "pages/home/Features";
import Home from "pages/home/Home";
import Pricing from "pages/home/Pricing";
import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";

export default function Layout() {
  return (
    <div className="layout-content">
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}
