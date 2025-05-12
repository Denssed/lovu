import { IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { taskType } from "../../types/taskType";
import ChipComponent from "../atoms/chip";

const TaskCard: React.FC<taskType> = (task: taskType) => {
  return (
    <div className="p-2 flex flex-row gap-2">
      <div className="flex flex-col items-start justify-start w-full gap-3">
        <IonCardHeader className="flex flex-col items-center justify-between gap-2">
          <div className="flex flex-row items-center justify-start gap-6 w-full">
            <IonCardTitle>{task.title}</IonCardTitle>
          </div>
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
          {`${task.createdAt.getHours() % 12 || 12}:${task.createdAt
            .getMinutes()
            .toString()
            .padStart(2, "0")} ${
            task.createdAt.getHours() >= 12 ? "PM" : "AM"
          }`}
        </IonCardSubtitle>
      </div>
    </div>
  );
};

export default TaskCard;
