import { categoryTaskType } from "./categoryTaskType";
import { pointsType } from "./pointsType";

export type taskType = {
  id: string;
  title: string;
  category: categoryTaskType;
  points: pointsType[];
  createdAt: Date;
};
