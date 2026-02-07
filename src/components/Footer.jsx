import { Link, NavLink } from "react-router-dom";
import { Phone, Instagram, MailIcon, Target } from "lucide-react";
import { Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
	const navClass = ({ isActive }) =>
		`pageLinks cursor-pointer rounded text-center p-2 transition-colors
	   hover:bg-purple-500 hover:text-black w-full md:w-40
	   ${isActive ? "bg-purple-500 text-black" : ""}`;
	return (
		<footer className="bg-black text-gray-300 mt-20 border-t border-purple-500/30">
			<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
				{/* Company Info */}
				<div>
					<h2 className="text-xl font-bold text-white mb-3">
						DigiPixelTech
					</h2>
					<p className="text-sm leading-relaxed">
						DigiPixelTech is a frontend-focused development studio
						creating fast, responsive, and user-friendly websites and
						digital experiences for modern businesses.
					</p>
				</div>

				{/* Quick Links */}
				<div className="left flex flex-col justify-self-center">
					<h3 className="text-lg quickLinks font-semibold text-white mb-3">
						Quick Links
					</h3>
					<NavLink to="/" className={navClass}>
						Home
					</NavLink>

					<NavLink to="/services" className={navClass}>
						Services
					</NavLink>

					<NavLink to="/projects" className={navClass}>
						Projects
					</NavLink>

					<NavLink to="/about" className={navClass}>
						About
					</NavLink>

					<NavLink to="/contact" className={navClass}>
						Contact
					</NavLink>
				</div>

				{/* Services */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-3">
						Services
					</h3>
					<ul className="space-y-2 text-sm list-decimal">
						<li>Web Design & Development</li>
						<li>Frontend Development (React)</li>
						<li>UI/UX Improvements</li>
						<li>Website Performance Optimization</li>
						<li>Responsive Website Design</li>
					</ul>
				</div>

				{/* Contact + Social */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-3">
						Click to Contact
					</h3>

					<div className="flex flex-wrap gap-3 mb-4">
						<a Target='_blank'
							href="https://www.instagram.com/digipixeltech/"
							className="hover:text-pink-500 -mt-px"
						>
							<Instagram />
						</a>
						<a Target='_blank'
							href="https://wa.me/917411712661"
							className="hover:text-green-400"
						>
							<Whatsapp size={22} />
						</a>
						<a Target='_blank' href="tel:+916360836891" className="hover:text-green-700">
							<Phone />
						</a>
						<a Target='_blank' href="mailto:digipixeltechsolution@gmail.com?subject=Project Inquiry&body=Hello DigiPixelTech, I want to discuss a project." className="hover:text-gray-500">
							<MailIcon />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Copyright */}
			<div className="border-t border-purple-500/20 text-center py-4 text-sm text-gray-400">
				© {new Date().getFullYear()} DigiPixelTech. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
