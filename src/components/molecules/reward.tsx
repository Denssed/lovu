import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { rewardType } from "../../types/rewadType";
import IconComponent from "../atoms/icon";
import { iconType } from "../../types/iconType";
import { rewardCategories } from "../../enums/rewardCategories";
import ChipComponent from "../atoms/chip";
import selfCareImg from "../../assets/svgs/self-care.svg";
import foodImg from "../../assets/svgs/food.svg";
import travelImg from "../../assets/svgs/travel.svg";
import ButtonComponent from "../atoms/button";
import { buttonType } from "../../types/buttonType";

const RewardCard: React.FC<rewardType> = (reward: rewardType) => {
  const redeemButton: buttonType = {
    title: "Redeem",
    expand: "full",
    outline: "solid",
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
    <div className="p-2 flex flex-col gap-2">
      <IonCardHeader className="flex flex-col items-center justify-between gap-4">
        <div className="flex flex-row items-center justify-start gap-6 w-full">
          <IconComponent
            name={rewardIcon.name}
            size={rewardIcon.size}
            path={rewardIcon.path}
          />
          <IonCardTitle>{reward.title}</IonCardTitle>
        </div>
        <div className="flex flex-row items-center justify-start gap-6 w-full">
          <ChipComponent
            title={reward.category}
            disabled={false}
            outline={false}
            isPoint={false}
          ></ChipComponent>
          <ChipComponent
            title={reward.pointCost.toString()}
            disabled={false}
            outline={false}
            isPoint={true}
          ></ChipComponent>
        </div>
      </IonCardHeader>

      <div className="p-0">
        <IonCardSubtitle>Description:</IonCardSubtitle>
        <span>{reward.description}</span>
      </div>

      <div>
        <ButtonComponent
          title={redeemButton.title}
          expand={redeemButton.expand}
          outline={redeemButton.outline}
        />
      </div>
    </div>
  );
};

export default RewardCard;
