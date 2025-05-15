import { pointsType } from "./pointsType";

export type headerType = {
  title: 'Rewards' | 'Activity' | 'History';
  name: string[];
  message: string[];
  points: pointsType[]
};
