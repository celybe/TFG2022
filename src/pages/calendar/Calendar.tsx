import * as React from "react";

export interface ICalendarProps {}

export interface ICalendarState {}

export default class Calendar extends React.Component<
  ICalendarProps,
  ICalendarState
> {
  constructor(props: ICalendarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div></div>;
  }
}
