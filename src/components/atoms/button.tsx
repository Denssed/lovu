import { IonButton } from "@ionic/react";
import { buttonType } from "../../types/buttonType";

const ButtonComponent: React.FC<buttonType> = (button: buttonType) => {
    return (
        <IonButton shape='round' expand={button.expand} fill={button.outline}>{button.title.charAt(0).toUpperCase() + button.title.slice(1)}</IonButton>
    );
};

export default ButtonComponent;