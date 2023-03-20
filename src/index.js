import React from "react";
import ReactDOM from "react-dom";

const navbar = (
	<nav>
		<h2>GPU DataBase</h2>
		<ul>
			<li>4090</li>
			<li>4080</li>
			<li>4070 Ti</li>
		</ul>
	</nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);

// ReactDOM.createRoot(document.getElementById("root")).render(navbar);
