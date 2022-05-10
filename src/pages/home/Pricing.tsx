import * as React from "react";

export interface IPricingProps {}

export interface IPricingState {}

export default class Pricing extends React.Component<
  IPricingProps,
  IPricingState
> {
  constructor(props: IPricingProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div></div>;
  }
}
