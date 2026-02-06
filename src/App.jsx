import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {

	const teamMembers = [
		{
			img: "",
			Name: "Azeem",
			Role: "CEO",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, porro?",
		},
		{
			img: "",
			Name: "Mirfeez",
			Role: "CEO",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, porro?",
		},
		{
			img: "",
			Name: "Other",
			Role: "Senior dev",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, porro?",
		},
		{
			img: "",
			Name: "Other2",
			Role: "Junior dev",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, porro?",
		},
		{
			img: "",
			Name: "Other3",
			Role: "Hr",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, porro?",
		},
	];

	const servicesCard = [
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
      image: "./img/service-card/1st-card.jpg",
    },
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
    },
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
    },
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
    },
  ];

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services servicesCard={servicesCard} />} />
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
