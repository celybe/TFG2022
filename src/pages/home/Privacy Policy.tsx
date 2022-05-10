import * as React from "react";

export interface IPrivacyPolicyProps {}

export interface IPrivacyPolicyState {}

export default class PrivacyPolicy extends React.Component<
  IPrivacyPolicyProps,
  IPrivacyPolicyState
> {
  constructor(props: IPrivacyPolicyProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Privacy Policy</div>;
  }
}
