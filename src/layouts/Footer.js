import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<nav>
				<h3>Contact Us</h3>
				<ul>
					<li>Address: 1a Little Lemon Street, Chicago</li>
					<li>Email: order@littlelemon.com</li>
					<li>Phone: 123 456 7899</li>
				</ul>
			</nav>
			<nav>
				<h3>Opening times</h3>
				<ul>
					<li>Monday - Friday: 9am - 10pm</li>
					<li>Saturday - Sunday: 10am - 12am</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
