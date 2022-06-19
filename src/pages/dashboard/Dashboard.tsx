import { Grid, GridItem } from "@chakra-ui/react";
import * as React from "react";
import { Text } from "@chakra-ui/react";
export interface IDashboardProps {}

export interface IDashboardState {}

export default class Dashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  constructor(props: IDashboardProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Grid templateColumns="37vw 37vw" templateRows="48vh 48vh" gap="6">
        <GridItem>
          <Text fontSize="2xl">TODAY TASK'S</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="2xl">STADISTICS MONTH</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="2xl">YOUR PROGRESS</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="2xl">RECENTS</Text>
        </GridItem>
      </Grid>
    );
  }
}
