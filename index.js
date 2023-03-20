import React from "react";
import ReactDOM from "react-dom";

const navbar = (
	<nav>
		<h1>GPU Database</h1>
		<ul>
			<li>DB</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

ReactDOM.render(navbar, document.getElementById("root"));

// function MonComposant() {
// 	return (
// 		<div>
// 			<h1>Je m'appelle Mika</h1>
// 			<h2>Je travaille sur React</h2>
// 			<ul>
// 				<li>ligne1</li>
// 				<li>ligne2</li>
// 				<li>ligne3</li>
// 			</ul>
// 		</div>
// 	);
// }

// ReactDOM.render(
// 	<div>
// 		<MonComposant />
// 	</div>,

// 	document.getElementById("root")
// );

// const h2 = document.createElement("h2");
// h2.textContent = "C'est un elt h2 crée par createElement";
// h2.className = "header";
// document.getElementById("root").append(h2);

// const page = (
// 	<div>
// 		<h1 className="header"></h1>
// 		<p>Liste NVIDIA</p>
// 		<ul>
// 			<li>4090</li>
// 			<li>4080</li>
// 			<li>4070Ti</li>
// 		</ul>
// 	</div>
// );

// ReactDOM.render(page, document.getElementById("root"));
