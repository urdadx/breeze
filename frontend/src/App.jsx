import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(
    localStorage.getItem("active-section") || "home"
  );

  // handle change and persistence of tabs in leftbar
  const handleChange = (e, newValue) => {
    e.preventDefault()
    setValue(newValue);
    localStorage.setItem("active-section", newValue)
    
  };

  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Home currentState={value} changeState={handleChange} />
    </div>
  )
}

export default App
