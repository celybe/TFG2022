import { Task } from "./Task";

export interface Column {
  _id: string;
  Name: string;
  Items: [Task];
}
