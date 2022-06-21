import { Grid } from "@chakra-ui/react";
import React from "react";
import Day from "./Day";

let num = 0;
const Month = ({ month }) => {
  return (
    <Grid
      templateColumns={"repeat(7, 1fr)"}
      templateRows={"repeat(5, 1fr)"}
      py={4}
    >
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Month;
