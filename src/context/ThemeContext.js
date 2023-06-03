import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action ) => {

  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
      break;
  
    default:
      return state;
      break;
  }
}

export function TemaTaminlovchisi({ children }) {

 const [state, dispatch] =  useReducer(themeReducer, {
    color: "white"
  })

const changeColor = (color) => {
 dispatch({ type: "CHANGE_COLOR", payload: color })
}

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}> {children}</ThemeContext.Provider>
  )

}