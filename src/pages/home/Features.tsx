import * as React from "react";

export interface IFeaturesProps {}

export interface IFeaturesState {}

export default class Features extends React.Component<
  IFeaturesProps,
  IFeaturesState
> {
  constructor(props: IFeaturesProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Features</div>;
  }
}
