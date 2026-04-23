import { BriefcaseBusiness, Code, MousePointerClick } from "lucide-react";
import { Link, Links } from "react-router-dom";
import Mirfeez from "../img/Projects/Portfolio.Mirfeez.png";
import DateTime from "../components/DateTime";
import { motion } from "motion/react";

const Home = () => {
	const homewwd = [
		{
			wwdIcon: Code,
			wwdHead: "Frontend Development",
			wwdInfo: "Building responsive, fast, and accessible user interfaces.",
		},
		{
			wwdIcon: BriefcaseBusiness,
			wwdHead: "Business Websites",
			wwdInfo:
				"Creating professional websites for businesses and portfolios.",
		},
		{
			wwdIcon: MousePointerClick,
			wwdHead: "Landing Pages",
			wwdInfo:
				"Designing and developing pages focused on clarity and conversion.",
		},
	];
	return (
		<>
			<section className="home-bg text-center py-20 px-6 bg-[url(img/banner/home.png)] h-150">
				<div className="mt-18 home-banner">
					<motion.h1
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							delay: 0.3,
							duration: 0.5,
						}}
						className="mb-6"
					>
						<DateTime />
					</motion.h1>
					<motion.h2
						initial={{
							y: 20,
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
						className="text-4xl justify-self-center font-bold mb-4 "
					>
						We Respect
						<span className="ml-1 bg-purple-500 rounded px-2 text-black shadow-purple-500">
							Time
						</span>
						-<span className="text-purple-500">Yours </span>
						and <span className="text-purple-500">Ours</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.5,
						}}
						className="text-gray-600 max-w-xl mx-auto"
					>
						Every second matters in performance, deadlines, and user
						experience. Digipixeltech helps businesses grow with modern
						websites, apps and digital solutions.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.5,
						}}
						className="flex justify-center"
					>
						<Link
							to="Projects"
							className="home-banner-btn mt-6 px-6 py-3 w-40 bg-purple-600 text-white rounded-lg cursor-pointer"
						>
							See Our Work
						</Link>
					</motion.div>
				</div>
			</section>

			<div className="what-we-do mt-20">
				<motion.h1
					initial={{
						y: -30,
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
					className="text-4xl flex justify-center mb-20"
				>
					What We Do
				</motion.h1>
				<div className="flex home-card gap-10 m-10 flex-wrap justify-center">
					{homewwd.map((props, idx) => {
						return (
							<div key={idx} className="">
								<motion.div
									initial={{
										y: -20,
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
									className="card w-100 p-10 "
								>
									<props.wwdIcon
										size={45}
										color="gray"
										className="icon justify-self-center mb-10"
									/>
									<h2 className="text-center text-xl mb-2">
										{props.wwdHead}
									</h2>
									<p className="text-center text-gray-400">
										{props.wwdInfo}
									</p>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="home-project h-150">
				<h1 className="text-3xl flex justify-self-center my-20 font-mono">
					Featured Projects
				</h1>
				<motion.div
					initial={{
						y: 30,
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
					className="h-90 w-150 flex flex-col justify-self-center rounded-2xl shadow-black shadow-2xl"
				>
					<img src={Mirfeez} alt="" />
					<h1 className="text-xl mt-5">
						<span className="flex justify-self-center font-mono">
							Portfolio Website
						</span>
					</h1>
				</motion.div>
				<Link to="/projects" className=" mt-2 cursor-pointer">
					<span className="bg-purple-600 mt-5 featured-project justify-self-center flex px-2 py-1 rounded text-black">
						View Projects
					</span>
				</Link>
			</div>
			<div>
				<div className="home-end flex justify-between my-20  mx-15">
					<div>
						<h1 className="text-3xl mb-5">Why Choose Us?</h1>
						<ul className="lists">
							<li>✓ &nbsp; Clean, Maintainable code</li>
							<li>✓ &nbsp; Focused on Performance and Usability</li>
							<li>✓ &nbsp; Clear Communication and timely delivery</li>
						</ul>
					</div>
					<div>
						<div className="home-end-second flex flex-col rounded-2xl border-purple-900 border p-10 mr-10">
							<h1 className="mb-6">Have a Project In Mind?</h1>
							<div className="justify-center flex">
								<Link
									to="/Contact"
									className="px-6 py-3 w-35 hover:bg-purple-500 bg-purple-600 text-white rounded-lg cursor-pointer"
								>
									Get In Touch
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
