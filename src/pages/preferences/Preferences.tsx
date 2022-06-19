import * as React from "react";

export interface IPreferencesProps {}

export interface IPreferencesState {}

export default class Preferences extends React.Component<
  IPreferencesProps,
  IPreferencesState
> {
  constructor(props: IPreferencesProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>Preferences</div>;
  }
}
