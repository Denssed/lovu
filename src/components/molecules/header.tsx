import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { headerType } from "../../types/headerType";
import ChipComponent from "../atoms/chip";
import { pointsType } from "../../types/pointsType";

const HeaderComponent: React.FC<headerType> = (header: headerType) => {
  return (
    <IonHeader>
      <IonToolbar>
        <div className="flex flex-row items-start justify-between gap-2 p-2">
          <div className="flex flex-col items-start gap-2">
            <IonTitle>{header.title}</IonTitle>
            <span className="text-sm">{header.message}</span>
          </div>
          <div className="flex flex-col items-end justify-start gap-2">
            <span>Name: {header.name}</span>
            <span>Points</span>
            <div className="flex flex-row items-center justify-start gap-2">
              {header.points.map((point: pointsType) => (
                <ChipComponent
                  key={point.id}
                  title={point.value.toString()}
                  disabled={false}
                  outline={false}
                  isPoint={true}
                  category={point.category}
                  isButton={false}
                />
              ))}
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
