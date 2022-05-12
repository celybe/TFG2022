import * as React from "react";

export interface IProfileProps {}

export interface IProfileState {}

export default class Profile extends React.Component<
  IProfileProps,
  IProfileState
> {
  constructor(props: IProfileProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div></div>;
  }
}
