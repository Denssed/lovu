import { IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { taskType } from "../../types/taskType";
import ChipComponent from "../atoms/chip";
// import { rewardType } from "../../types/rewadType";

const TaskCard: React.FC<taskType> = (task: taskType) => {
  // const { setData, loading, error } = useSetData();

  //  const rewardTest: rewardType = {
  //   id: "10",
  //   title: "New Reward",
  //   description: "This is a new reward.",
  //   category: "self-care",
  //   points: [
  //     { id: 1, category: "common", value: 100 },
  //     { id: 2, category: "special", value: 50 },
  //   ],
  //   redeemAt: new Date(),
  //   hasDiscount: false,
  //   discount: 0
  // }

  // const handleAddReward = async (reward: rewardType) => {
  //   await setData("main/user/rewards", reward);
  //   alert("Reward added successfully");
  // };

  return (
    <div className="p-2 flex flex-row gap-2">
      <div className="flex flex-col items-start justify-start w-full gap-3">
        <IonCardHeader className="flex flex-col items-center justify-between gap-2">
          <div className="flex flex-row items-center justify-start gap-6 w-full">
            <IonCardTitle>{task.title}</IonCardTitle>
          </div>
          {/* {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>} */}
          <div className="flex flex-row items-center justify-start gap-6 w-full">
            <ChipComponent
              title={task.category}
              disabled={false}
              outline={false}
              isPoint={false}
              category={task.category}
              isButton={false}
            ></ChipComponent>
            {task.points.map((point) => (
              <ChipComponent
                key={point.id}
                title={point.value.toString()}
                disabled={false}
                outline={false}
                isPoint={true}
                category={point.category}
                isButton={false}
              ></ChipComponent>
            ))}
          </div>
        </IonCardHeader>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-20">
        <IonCardSubtitle className="flex flex-col items-center justify-center gap-2">
          <span className="text-xs">At:</span>
          {(() => {
            const createdAt = new Date(task.createdAt); // Convierte a un objeto Date
            return `${createdAt.getHours() % 12 || 12}:${createdAt
              .getMinutes()
              .toString()
              .padStart(2, "0")} ${createdAt.getHours() >= 12 ? "PM" : "AM"}`;
          })()}
        </IonCardSubtitle>
      </div>
    </div>
  );
};

export default TaskCard;
