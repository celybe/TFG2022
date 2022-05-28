import { Grid } from "@chakra-ui/react";
import Sidebar from "components/navigation/Sidebar";
import Calendar from "pages/calendar/Calendar";
import Dashboard from "pages/dashboard/Dashboard";
import Tasks from "pages/tasks/Tasks";
import React from "react";
import { Outlet, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="task" element={<Tasks />} />
      <Sidebar children={undefined} />
      <Outlet />
    </div>
  );
};

export default Main;
