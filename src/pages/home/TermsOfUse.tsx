import * as React from "react";

export interface ITermsOfUseProps {}

export interface ITermsOfUseState {}

export default class TermsOfUse extends React.Component<
  ITermsOfUseProps,
  ITermsOfUseState
> {
  constructor(props: ITermsOfUseProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Terms of Use</div>;
  }
}
