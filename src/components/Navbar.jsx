import { useState } from "react";
import logo from "../img/Logo/dpt-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navClass = ({ isActive }) =>
		`pageLinks cursor-pointer rounded text-center p-2 transition-colors
   hover:bg-purple-500 hover:text-black 
   ${isActive ? "bg-purple-500 text-black" : ""}`;

	return (
		<nav className="relative flex justify-between items-center px-6 py-4 shadow-md z-50">
			<div className="flex items-center gap-2 p-2 rounded-lg shadow-md ">
				<img
					id="logo"
					className="w-11 rounded-full shadow shadow-purple-600  p-0.5"
					src={logo}
					alt="Digipixeltech logo"
				/>
				<h1 className="text-xl font-bold text-purple-600">DigiPixelTech</h1>
			</div>
			<div className="hidden md:flex gap-6 font-medium">
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
			{/* Mobile menu button */}
			<button
				className="md:hidden p-2 rounded-md  focus:outline-none hover:bg-black"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close menu" : "Open menu"}
			>
				{isOpen ? (
					/* Close Icon */
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					/* Hamburger Icon */
					<svg
						className="w-6 h-6 "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</button>
			{/* Mobile menu panel */}
			{isOpen && (
				<div className="md:hidden absolute right-4 top-full mt-1 bg-black border  border-purple-500 shadow-md rounded-md py-2 px-2 flex flex-col gap-2">
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
			)}
		</nav>
	);
};

export default Navbar;
