import { useState } from "react";
import logo from "../img/Logo/dpt-logo.png";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navClass = ({ isActive }) =>
		`pageLinks cursor-pointer rounded text-center p-2 transition-colors
   hover:bg-purple-500 hover:text-black 
   ${isActive ? "bg-purple-500 text-black" : ""}`;

	return (
		<nav className="sticky top-0 flex justify-between items-center px-6 py-2 shadow-md shadow-black z-50 bg-transparent backdrop-blur-md ">
			<div className="flex items-center gap-2 p-2 rounded-lg ">
				<motion.img
					initial={{
						opacity: 0,
						y: -10,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
					id="logo"
					className="w-11 rounded-full shadow shadow-purple-600  p-0.5"
					src={logo}
					alt="Digipixeltech logo"
				/>
				<motion.h1
					initial={{
						opacity: 0,
						y: -10,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
					className="text-xl font-bold text-purple-600"
				>
					DigiPixelTech
				</motion.h1>
			</div>
			<div className="hidden md:flex gap-6 font-medium">
				<motion.div
					initial={{
						y: -10,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
					<NavLink to="/" className={navClass}>
						Home
					</NavLink>
				</motion.div>

				<motion.div
					initial={{
						y: -10,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
					<NavLink to="/services" className={navClass}>
						Services
					</NavLink>
				</motion.div>

				<motion.div
					initial={{
						y: -10,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
					<NavLink to="/projects" className={navClass}>
						Projects
					</NavLink>
				</motion.div>

				<motion.div
					initial={{
						y: -10,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
					<NavLink to="/about" className={navClass}>
						About
					</NavLink>
				</motion.div>

				<motion.div
					initial={{
						y: -10,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
					<NavLink to="contact" className={navClass}>
						Contact
					</NavLink>
				</motion.div>
			</div>
			{/* Mobile menu button */}
			<button
				className="md:hidden p-2 rounded-md  focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close menu" : "Open menu"}
			>
				{isOpen ? (
					/* Close Icon */
					<motion.svg
						animate={{
							x: -18,
						}}
						transition={{
							duration: 0.4,
						}}
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
					</motion.svg>
				) : (
					/* Hamburger Icon */
					<motion.svg
						initial={{
							x: -20,
						}}
						animate={{
							x: 0,
						}}
						transition={{
							duration: 0.5,
						}}
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
					</motion.svg>
				)}
			</button>
			{/* Mobile menu panel */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							x: 20,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
						}}
						exit={{ x: 20, opacity: 0 }}
						transition={{
							duration: 0.4,
						}}
						className="md:hidden absolute right-4 top-full mt-1 bg-black border  border-purple-500 shadow-md rounded-md py-2 px-2 flex flex-col gap-2"
					>
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
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
