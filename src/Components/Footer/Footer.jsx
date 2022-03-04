
import { Headphones, Mail } from "react-feather";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer id="Footer">
			<div className="address">
				<h3>Ubicación</h3>
				<hr />

				<div>
					<p>Avenida Andrômeda,</p>
					<p>2000. Bloco 6 e 8</p>
					<p> Alphavile SP brasil@corebiz.ag</p>
					<p>+55 11 3090 1039</p>
				</div>
			</div>
			<div className="buttons">
				<button> <Mail />  <span>CONTÁCTANOS</span> </button>

				<button> <Headphones />  <span>HABLA CON UN CONSULTOR</span> </button>
			</div>
			<div className="developers">
				<div>
					<small>Desarrollado por</small>
					<p>Corebiz</p>
				</div>
				<div>
					<small>Powered by</small>
					<p>VTEX</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
