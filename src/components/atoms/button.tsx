import { IonButton, IonIcon } from "@ionic/react";
import { buttonType } from "../../types/buttonType";
import { addSharp } from 'ionicons/icons';

const ButtonComponent: React.FC<buttonType> = (button: buttonType) => {
  return (
    <IonButton shape="round" expand={button.expand} fill={button.outline}>
      { !button.isTask ? button.title.charAt(0).toUpperCase() + button.title.slice(1) :
         <IonIcon className="" slot="icon-only" icon={addSharp}></IonIcon>
      }
    </IonButton>
  );
};

export default ButtonComponent;
