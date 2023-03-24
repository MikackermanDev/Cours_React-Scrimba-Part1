import React from "react";
import ReactDOM from "react-dom";
import imgMenu from "./assets/img/logoMenu.png";

const page1 = (
	<div>
		<img src={imgMenu} width="40px" alt="logoMenu" />
		<br />
		<img src={`/logoreact.png`} width="40px" alt="logo1" />

		<h1>Fun facts about React</h1>
		<ul>
			<li>Was first release in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>ligne 3</li>
			<li>ligne 4</li>
			<li>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
				recusandae.
			</li>
		</ul>
	</div>
);

const route1 = ReactDOM.createRoot(document.getElementById("root1"));
route1.render(page1);
