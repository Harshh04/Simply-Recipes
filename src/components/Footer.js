import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className="page-footer">
				<p>
					&copy; {new Date().getFullYear()} <span> Recipie Vault</span> , Built
					with "<a href="https://www.gatsbyjs.com/">Gatsby</a>"
				</p>
			</footer>
		</div>
	);
};

export default Footer;
