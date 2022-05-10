import * as React from "react";

export interface IAboutProps {}

export interface IAboutState {}

export default class About extends React.Component<IAboutProps, IAboutState> {
  constructor(props: IAboutProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>About</div>;
  }
}
