import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => (
	<div className="footer-container">
		<p>
			Copyright &copy; {new Date().getFullYear()} Bankai Store. Todos los
			derechos reservados
		</p>
		<p className="icons">
			<AiFillInstagram />
			<AiOutlineTwitter />
		</p>
	</div>
)

export default Footer
