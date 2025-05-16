import { categoryTaskType } from "./categoryTaskType";
import { pointsType } from "./pointsType";

export type transactionType = {
  id: number;
  title: string;
  category: categoryTaskType;
  points: pointsType[];
  isTask: boolean;
  createdAt: Date;
};
