import { useState, createContext } from "react";

import PageLayout from "./components/PageLayout";
import "./App.css";

export const MyContext = createContext(); //using context to prevent prop drilling

function App() {
	const [toggle, setToggle] = useState(true); //SideBar Menu toggle to show and hide

	const onToggle = () => {
		setToggle(!toggle);
	};

	return (
		<MyContext.Provider className='App' value={toggle}>
			<header>
				<i className='bi bi-list' onClick={onToggle}></i>
				Analytics Dashboard
			</header>
			<PageLayout />
		</MyContext.Provider>
	);
}

export default App;
