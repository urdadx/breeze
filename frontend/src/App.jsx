import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const App = () => {

  const [value, setValue] = useState("home");

  // handleChange of tabs in leftbar
  const handleChange = (e, newValue) => {
    e.preventDefault()
    setValue(newValue);
  };

  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        style={{
          fontFamily:"Epilogue"
        }}
        reverseOrder={false}
      />
      <Home currentState={value} changeState={handleChange} />
    </div>
  )
}

export default App
