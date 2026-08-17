
import { useDarkMode } from "../../hooks/hook.jsx";


export function Button({ children, onClick }) {
  const { isDarkMode } = useDarkMode();

  return (
   <button
      className={`${
        isDarkMode ? "bg-amber-800 text-black" : "bg-amber-50 text-black"
      } rounded-lg px-4 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}