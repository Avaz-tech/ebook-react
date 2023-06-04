import "../styles/ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../images/mode-icon.svg";
import { IconButton } from "@mui/material";
import { Brightness3, Brightness7 } from "@mui/icons-material";

const themeColors = ["#116466", "#553D67", "#950740", "#5CDB95", "#EAE7DC"];

export default function ThemeSelector(params) {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
    document.body.style.backgroundColor = mode === 'light' ? '#041C32' : 'white'
  };
  console.log(mode);

  return (
    <div className="themeSelector">
      <div className="mode-toggle">
        <IconButton
          style={mode === "light" ? { color: "black" } : { color: "white" }}
          onClick={toggleMode}
        >
          {mode === "light" ? <Brightness3 /> : <Brightness7 />}
        </IconButton>
      </div>
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
