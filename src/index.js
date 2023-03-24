import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Page1() {
	return (
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}

const route1 = ReactDOM.createRoot(document.getElementById("root1"));
route1.render(<Page1 />);
