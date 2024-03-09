import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemBtn";
import Card from "./components/Card";

function App() {
  const [themMode, setThemMode] = useState("light");
  const lightTheme = () => {
    setThemMode("light");
  }
  const darkTheme = () => {
    setThemMode("dark");
  }

  // actual theme change code
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themMode);
  }, [themMode]);


  return (
    <ThemeProvider value={{themMode,lightTheme,darkTheme}}>

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  );
}

export default App;
