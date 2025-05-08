import { IonImg } from "@ionic/react";
import { iconType } from "../../types/iconType";

const IconComponent: React.FC<iconType> = (icon: iconType) => {
  return (
    <IonImg
      src={icon.path}
      alt={icon.name}
        style={{
            width: icon.size,
            height: icon.size,
            margin: "0px",
            padding: "0px",
        }}
    ></IonImg>
  );
}

export default IconComponent;