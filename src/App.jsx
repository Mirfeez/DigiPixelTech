import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Profile from "./img/Logo/profile-logo.png";

export default function App() {

	const teamMembers = [
		{
			img: Profile,
			Name: "Mirfeez",
			Role: "Member",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Sapiente, porro?",
			Links: "https://mirfeez.github.io/Mirfeez-portfolio/"
		},
		{
			img: Profile,
			Name: "Azeem",
			Role: "Member",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, porro?",
			Links: ""
		},
	];


	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/projects" element={<Projects />} />
				<Route
					path="/about"
					element={<About teamMembers={teamMembers} />}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}
