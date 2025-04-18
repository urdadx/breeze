import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

const App = () => {
	// Set default on initial load
	const defaultSection = "home";
	const activeSection =
		localStorage.getItem("active-section") || defaultSection;

	const [value, setValue] = useState(activeSection);

	// Ensure default section is set when app loads
	useEffect(() => {
		if (!localStorage.getItem("active-section")) {
			localStorage.setItem("active-section", defaultSection);
			setValue(defaultSection);
		}
	}, []);

	// handle change and persistence of tabs in leftbar
	const handleChange = (e, newValue) => {
		e.preventDefault();
		setValue(newValue);
		localStorage.setItem("active-section", newValue);
	};

	return (
		<div className="App">
			<Toaster position="bottom-right" reverseOrder={false} />
			<Home currentState={value} changeState={handleChange} />
		</div>
	);
};

export default App;
