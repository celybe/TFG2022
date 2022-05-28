import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";

export default function Layout() {
  const bg = useColorModeValue("white", "dark");

  return (
    <Grid className="layout-content" bg={bg} templateColumns="repeat(1, 1fr)">
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
