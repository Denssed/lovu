import { IonChip } from "@ionic/react";
import { chipType } from "../../types/chipType";

const ChipComponent: React.FC<chipType> = (chip: chipType) => {
  return (
    <IonChip className="p-2" disabled={chip.disabled} outline={chip.outline}>
      {chip.isPoint ? `${chip.title} P` : chip.title.charAt(0).toUpperCase() + chip.title.slice(1)}
    </IonChip>
  );
};

export default ChipComponent;
