import { IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { rewardType } from "../../types/rewadType";
import IconComponent from "../atoms/icon";
import { iconType } from "../../types/iconType";
import {
  rewardCategories,
  // categoryRewardType, // Removed as it is not exported
} from "../../enums/rewardCategories";
import ChipComponent from "../atoms/chip";
import selfCareImg from "../../assets/svgs/self-care.svg";
import foodImg from "../../assets/svgs/food.svg";
import travelImg from "../../assets/svgs/travel.svg";
import ButtonComponent from "../atoms/button";
import { buttonType } from "../../types/buttonType";
import { pointsType } from "../../types/pointsType";
import SpanComponent from "../atoms/spanButton";

const RewardCard: React.FC<rewardType> = (
  reward: rewardType & { category: string } // Updated to use string type
) => {
  const redeemButton: buttonType = {
    title: "Redeem for -",
    expand: "full",
    outline: "outline",
    isTask: false,
  };

  const rewardIcon: iconType = {
    name: "",
    size: 0,
    path: "",
  };

  switch (reward.category) {
    case rewardCategories.selfCare:
      rewardIcon.name = reward.category;
      rewardIcon.size = 30;
      rewardIcon.path = selfCareImg;
      break;
    case rewardCategories.food:
      rewardIcon.name = reward.category;
      rewardIcon.size = 30;
      rewardIcon.path = foodImg;
      break;
    case rewardCategories.travel:
      rewardIcon.name = reward.category;
      rewardIcon.size = 30;
      rewardIcon.path = travelImg;
      break;
    default:
      break;
  }

  return (
    <div className="p-2 m-4 flex flex-col gap-2 border rounded-2xl border-gray-300">
      <IonCardHeader className="flex flex-col items-center justify-between gap-4">
        <div className="flex flex-row items-center justify-start gap-2 w-full">
          <IconComponent
            name={rewardIcon.name}
            size={rewardIcon.size}
            path={rewardIcon.path}
          />
          <IonCardTitle>{reward.title}</IonCardTitle>
        </div>
        <div className="flex flex-row items-center justify-start gap-4 w-full">
          <ChipComponent
            title={reward.category}
            disabled={false}
            outline={false}
            isPoint={false}
            category={reward.category}
            isButton={false}
          ></ChipComponent>
        </div>
      </IonCardHeader>

      <div className="p-0">
        <IonCardSubtitle>Description:</IonCardSubtitle>
        <span>{reward.description}</span>
      </div>

      <div>
        <ButtonComponent
          expand={redeemButton.expand}
          title={redeemButton.title}
          outline={redeemButton.outline}
          isTask={redeemButton.isTask}
        >
          {
            reward.points.map((point: pointsType) => (
              <SpanComponent
                key={point.id} id={point.id} category={point.category} value={point.value}                
              ></SpanComponent>
            ))
          }
        </ButtonComponent>
      </div>
    </div>
  );
};

export default RewardCard;
