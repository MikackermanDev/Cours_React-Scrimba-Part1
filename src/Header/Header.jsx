import "./Header.scss";

export default function Header() {
	return (
		<div>
			<div className="navbar">
				<img src="src/assets/img/favM.ico" alt="favicon" />
				<ul>
					<li>
						<a href="https://www.google.fr" target="blank">
							Home
						</a>
					</li>
					<li>
						<a href="">About Me</a>
					</li>
					<li>
						<a href="">Contact Me</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
