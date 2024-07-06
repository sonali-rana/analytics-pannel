import React, { useContext, useState } from "react";
import { MyContext } from "../App";

const SideBar = () => {
	const showMenu = useContext(MyContext);

	const [isSelected, setIsSelected] = useState("Home");

	const menu = [
		{ icon: "bi bi-house-fill", title: "Home" },
		{ icon: "bi bi-columns-gap", title: "Customization" },
		{ icon: "bi bi-person-fill", title: "Audience" },
	];

	const menuItems = () => {
		return (
			<ul>
				{menu.map((menuItem) => {
					return (
						<li
							key={menuItem.title}
							onClick={() => setIsSelected(menuItem.title)}
							className={isSelected === menuItem.title ? "active" : ""}
						>
							<i className={menuItem.icon}></i>
							{menuItem.title}
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<nav className={showMenu ? "show-menu" : ""}>
			{showMenu ? menuItems() : <></>}
		</nav>
	);
};

export default SideBar;
