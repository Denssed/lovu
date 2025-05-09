import { IonSelect, IonSelectOption } from "@ionic/react";
import { selectType } from "../../types/selectType";

const SelectComponent: React.FC<selectType> = (select: selectType) => {
  return (
    <IonSelect interface={select.interface} placeholder={select.placeholder}>
      {select.data.map((item) => (
        <IonSelectOption  key={item.id} value={item.title}>
            <span>{item.title}</span>
            <span>{` - ${item.points} P`}</span>
        </IonSelectOption>
      ))}
    </IonSelect>
  );
};

export default SelectComponent;
