import * as React from "react";

export interface IContactProps {}

export interface IContactState {}

export default class Contact extends React.Component<
  IContactProps,
  IContactState
> {
  constructor(props: IContactProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Contact</div>;
  }
}
