import { IonChip } from "@ionic/react";
import { chipType } from "../../types/chipType";

const ChipComponent: React.FC<chipType> = (chip: chipType) => {
  return (
    <IonChip className="py-1 px-3" disabled={chip.disabled} outline={chip.outline}>
      <span className="text-xs">{chip.isPoint ? `${chip.title} P` : chip.title.charAt(0).toUpperCase() + chip.title.slice(1)}</span>
    </IonChip>
  );
};

export default ChipComponent;
