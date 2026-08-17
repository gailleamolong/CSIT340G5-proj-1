import { useState } from "react";
import DarkModeProvider from "./hooks/provider.jsx";
import { Button } from "./components/button/Button.jsx";

function App() {
  
  const [count, setCount] = useState(0);


  return (
    <DarkModeProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
        
        <h1 className="text-3xl font-bold underline">
          {count}
        </h1>

        <button className="bg-amber-50 text-black rounded-lg px-4 py-2" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="bg-amber-50 text-black rounded-lg px-4 py-2" onClick={
          () => setCount(count == 0 ? 0 : count - 1)}
        >
          Decrement
        </button>
        <Button onClick={() => setCount(0)}>
          Reset
        </Button>
    </div>
    </DarkModeProvider>
    
  );
}


export default App;
