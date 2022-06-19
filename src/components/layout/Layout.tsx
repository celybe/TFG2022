import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";

export default function Layout() {
  const bg4 = useColorModeValue("#ffffff", "#000A0F");
  return (
    <Grid className="layout-content" templateColumns="repeat(1, 1fr)" bg={bg4}>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
