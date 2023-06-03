import "../styles/ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";

const themeColors = ["#116466", "#553D67", "#950740", "#5CDB95", "#EAE7DC"];

export default function ThemeSelector(params) {
  const { changeColor } = useTheme();

  return (
    <div className="themeSelector">
      <div className="themeButtons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
