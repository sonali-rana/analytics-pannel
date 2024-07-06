import React from "react";
import SideBar from "./SideBar";
import MainPage from "./MainPage";

const PageLayout = () => {
	return (
		<div className='page-layout'>
			<SideBar />
			<MainPage />
		</div>
	);
};

export default PageLayout;
