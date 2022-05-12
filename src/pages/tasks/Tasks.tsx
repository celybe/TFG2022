import * as React from "react";

export interface ITasksProps {}

export interface ITasksState {}

export default class Tasks extends React.Component<ITasksProps, ITasksState> {
  constructor(props: ITasksProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div></div>;
  }
}
