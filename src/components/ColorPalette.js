import { useState } from "react";
import "../styles/colorpalette.css";
const initialColors = [
  "#000000",
  "#222222",
  "#444444",
  "#666666",
  "#888888",
  "#bbbbbb",
  "#dddddd",
  "#ffffff",
];
export default function ColorPalette() {
  const [colors, setColors] = useState(initialColors);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const handleColorChange = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) {
      return;
    }
    const updatedColors = [...colors];
    let temp_index_color = null;
    temp_index_color = updatedColors[draggedIndex];
    updatedColors[draggedIndex] = updatedColors[index];
    updatedColors[index] = temp_index_color;

    setColors(updatedColors);
    setDraggedIndex(null);
  };
  return (
    <div>
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            onClick={() => {
              const newColor = prompt("Enter a new color:", color);
              if (newColor) handleColorChange(index, newColor);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
