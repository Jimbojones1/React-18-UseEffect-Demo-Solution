import {  Link } from "react-router-dom";
export default function Header(){
	return (
		<header>
			<ul>
				<li><Link to="/user/10">User 1</Link></li>
				<li><Link to="/user/20">User 2</Link></li>
				<li><Link to="/user/30">User 3</Link></li>
			</ul>
		</header>
	)
}