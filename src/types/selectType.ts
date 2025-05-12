import { ReactNode } from "react";
import { taskType } from "./taskType";

export type selectType = {
  interface: 'action-sheet' | 'popover' | 'modal' | 'alert';
  placeholder: string;
  data: taskType[];
  children?: ReactNode;
};
