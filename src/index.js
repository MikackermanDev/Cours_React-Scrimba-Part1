import React from "react";
import ReactDOM from "react-dom";

const page = (
	<div>
		<h1>Mon super site</h1>
		<h3>Pourquoi j'aime React</h3>
		<ol>
			<li>J'ai pas trop le choix dans ce tuto </li>
			<li>C'est des composants</li>
			<li>C'est déclarative</li>
			<li>Employabilité élevée</li>
		</ol>
	</div>
);

// 1er écriture
ReactDOM.render(page, document.getElementById("root2"));

//2nd ecriture
//document.getElementById("root").append(JSON.stringify(page));

const navbar = (
	<nav>
		<h3>GPU DataBase</h3>
		<ul>
			<li>4090</li>
			<li>4080</li>
			<li>4070 Ti</li>
		</ul>
	</nav>
);

// 1ere écriture
const route = ReactDOM.createRoot(document.getElementById("root1"));
route.render(navbar);

// 2nd écriture
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);
