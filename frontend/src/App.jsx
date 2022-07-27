import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Home />
    </div>
  )
}

export default App
