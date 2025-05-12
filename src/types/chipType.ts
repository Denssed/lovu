import { categoryTaskType } from "./categoryTaskType";
import { categoryRewardType } from "./categoryRewardType";
import { categoryPointType } from "./categoryPointType";

export type chipType = {
  title: string;
  category: categoryTaskType | categoryRewardType | categoryPointType;
  disabled: boolean;
  outline: boolean;
  isPoint: boolean;
  isButton: boolean;
};
