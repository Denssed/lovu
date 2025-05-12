import { IonChip } from "@ionic/react";
import { chipType } from "../../types/chipType";

const ChipComponent: React.FC<chipType> = (chip: chipType) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "food":
        return "bg-red-500 text-white"; // Rojo para "food"
      case "travel":
        return "bg-blue-500 text-white"; // Azul para "travel"
      case "self-care":
        return "bg-green-500 text-white"; // Verde para "self-care"
      case "study":
        return "bg-yellow-500 text-white"; // Amarillo para "study"
      case "common":
        return "bg-purple-500 text-white"; // Morado para "common"
      case "special":
        return "bg-orange-500 text-white"; // Naranja para "special"
      default:
        return "bg-gray-500 text-white"; // Gris para categorías desconocidas
    }
  };

  return (
    <IonChip
      className={`py-1 px-3 ${getCategoryColor(chip.category)}`}
      disabled={chip.disabled}
      outline={chip.outline}
    >
      <span className="text-xs">
        {chip.isPoint
          ? `${chip.title} P`
          : chip.title.charAt(0).toUpperCase() + chip.title.slice(1)}
      </span>
    </IonChip>
  );
};

export default ChipComponent;
