import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "components/navigation/Sidebar";
import Calendar from "pages/calendar/Calendar";
import Dashboard from "pages/dashboard/Dashboard";
import Editor from "pages/document/Document";
import MyBoard from "pages/tasks/Board";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Preferences from "../preferences/Preferences";
import Profile from "../profile/Profile";

const Main = () => {
  const bg4 = useColorModeValue("#ffffff", "#000A0F");

  return (
    <Box display={{ lg: "flex", md: "flex" }}>
      <Sidebar children={undefined} />
      <Outlet />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="tasks" element={<MyBoard />} />
        <Route path="document" element={<Editor />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Box>
  );
};

export default Main;
