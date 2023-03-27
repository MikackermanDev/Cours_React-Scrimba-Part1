import React from "react";
import ReactDOM from "react-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(
	<div>
		<Header />
		<Main />
		<Footer />
	</div>
);
