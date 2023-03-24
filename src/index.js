import React from "react";
import ReactDOM from "react-dom";

function Header() {
	return (
		<header>
			<nav className="nav">
				<img src="logoReact.png" width="60px" alt="" />
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}

function MainContent() {
	return (
		<>
			<h2>best gpu</h2>
			<ol>
				<li>rtx 4090</li>
				<li>rx 7900XTX</li>
				<li>rtx 4080</li>
				<li>rx 7900XT</li>
			</ol>
		</>
	);
}
function Footer() {
	return (
		<footer>
			<small>@2023 Mikackerman development. All rights reserved.</small>
		</footer>
	);
}

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
