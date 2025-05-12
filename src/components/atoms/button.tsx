import { IonButton, IonIcon } from "@ionic/react";
import { buttonType } from "../../types/buttonType";
import { addSharp } from 'ionicons/icons';
import ChipComponent from "./chip";

const ButtonComponent: React.FC<buttonType> = (button: buttonType) => {
  return (
    <IonButton shape="round" expand={button.expand} fill={button.outline}>
    {!button.isTask ? (
      <>
        {button.title.charAt(0).toUpperCase() + button.title.slice(1)}
        {button.children && <div className="flex items-center gap-2">{button.children}</div>}
      </>
    ) : (
      <IonIcon className="" slot="icon-only" icon={addSharp}></IonIcon>
    )}
  </IonButton>
  );
};

export default ButtonComponent;
