import { categoryRewardType } from "./categoryRewardType";
import { pointsType } from "./pointsType";

export type rewardType = {
    id: string;
    title: string;
    description: string;
    category: categoryRewardType;
    points: pointsType[];
    redeemAt: Date;
    hasDiscount: boolean;
    discount: number;
    createdAt: Date;
  };
  