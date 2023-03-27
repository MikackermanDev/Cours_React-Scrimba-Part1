import "./Header.scss";

export default function Header() {
	return (
		<div className="nav-link">
			<img src="src/assets/img/favM.ico" alt="favicon" />
			<ul>
				<li>
					<a href="">Home</a>
				</li>
				<li>
					<a href="">About Me</a>
				</li>
				<li>
					<a href="">Contact Me</a>
				</li>
			</ul>
		</div>
	);
}
