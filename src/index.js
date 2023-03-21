import React from "react";
import ReactDOM from "react-dom";

const page1 = (
	<div>
		<img src="/assets/img/react-logo.png" width="40px" alt="LogoReact"></img>
		<h1>Encore une page</h1>
	</div>
);

const route1 = ReactDOM.createRoot(document.getElementById("root1"));
route1.render(page1);
