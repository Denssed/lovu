import React from "react";
import { pointsType } from "../../types/pointsType";


const SpanComponent: React.FC<pointsType> = (point: pointsType ) => {
  // Define estilos de gradiente según la categoría
  const getGradientClass = (category: string) => {
    switch (category.toLowerCase()) {
      case "common":
        return "bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text";
      case "special":
        return "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text";
    }
  };

  return (
    <span className={`font-bold text-lg ${getGradientClass(point.category)}`}>
      {point.value} P
    </span>
  );
};

export default SpanComponent;