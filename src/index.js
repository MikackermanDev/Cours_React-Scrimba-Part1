import React from "react";
import ReactDOM from "react-dom";
import imgMenu from "./assets/img/logoMenu.png";

const index = 1;

const page1 = (
	<div>
		<img src={imgMenu} width="40px" alt="logoMenu" />
		<br />
		<img src={`/logo${index}.png`} alt="logo1" />

		<h1>Encore une page</h1>
		<p>blablabla</p>
	</div>
);

const route1 = ReactDOM.createRoot(document.getElementById("root1"));
route1.render(page1);
