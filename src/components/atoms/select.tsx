import { IonSelect, IonSelectOption } from "@ionic/react";
import { selectType } from "../../types/selectType";
import { pointsType } from "../../types/pointsType";

const SelectComponent: React.FC<selectType> = (select: selectType) => {
  return (
    <IonSelect interface={select.interface} placeholder={select.placeholder}>
      {select.data.map((item) => (
        <IonSelectOption  key={item.id} value={item.title}>
            <span>{item.title}</span>
            {item.points.map((point: pointsType) => (
              <span key={point.id}>{` - ${point.value} P`}</span>
            ))}
        </IonSelectOption>
      ))}
    </IonSelect>
  );
};

export default SelectComponent;
