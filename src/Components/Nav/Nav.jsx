import React    from "react";
import { Link } from "react-router-dom";

import {
	User,
	ShoppingCart,
} from "react-feather";

import "./Nav.scss";
import { connect } from "react-redux";

const Nav = ({
	count,
}) => {

	return (
		<nav id="Nav">
			<div className="container-nav">
				<div className="menu">
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div className="logo">
					<Link to={"/"}>corebiz</Link>
				</div>

				<div className="search">
					<input type="search" placeholder="¿Qué estás buscando?" />
				</div>

				<div className="my-account">
					<div className="user">
						<User size={16} color={"#7A7A7A"} /> <p>Mi cuenta</p>
					</div>
					<div>
						<ShoppingCart size={16} color={"#7A7A7A"} /> <span>{count}</span>
					</div>
				</div>

			</div>
		</nav>
	);
};


const mapStateToProps = ({ shoppingCarReducer }) => ({
	count : shoppingCarReducer.count,
});


export default connect(mapStateToProps)(Nav);

