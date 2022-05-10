import * as React from "react";

export interface IFAQProps {}

export interface IFAQState {}

export default class FAQ extends React.Component<IFAQProps, IFAQState> {
  constructor(props: IFAQProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>FAQ</div>;
  }
}
