import { useContext } from "react";
import DarkModeContext from "./context.jsx";

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("Bayot");
  }

  return context;
}