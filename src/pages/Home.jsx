import { BriefcaseBusiness, Code, MousePointerClick } from "lucide-react";
import { Link, Links } from "react-router-dom";
import Mirfeez from "../img/Projects/Portfolio.Mirfeez.png";

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
			<section className="text-center py-20 px-6 bg-[url(img/banner/home.png)] h-150">
				<div className="mt-30">
					<h2 className="text-4xl justsc font-bold mb-4">
						We Build Digital Experiences
					</h2>
					<p className="text-gray-600 max-w-xl mx-auto">
						Digipixeltech helps businesses grow with modern websites, apps
						and digital solutions.
					</p>
					<div className="flex justify-center">
						<Link
							to="Projects"
							className="mt-6 px-6 py-3 w-40 bg-purple-600 text-white rounded-lg cursor-pointer"
						>
							See Our Work
						</Link>
					</div>
				</div>
			</section>
			{/* <div>
		<h1>Designing and developing modern web systems.</h1>
		<p>From planning to deployment, with clarity at every step.</p>
		<button>View Projects</button>
	</div> */}

			<div className="mt-20">
				<h1 class="text-4xl flex justify-center mb-20">What We Do</h1>
				<div className="flex gap-10 m-10">
					{homewwd.map((props) => {
						return (
							<>
								<div class="card w-1/3 p-10">
									<h2 class="text-center text-xl mb-2">
										{props.wwdHead}
									</h2>
									<p class="text-center text-gray-400">
										{props.wwdInfo}
									</p>
								</div>
							</>
						);
					})}
				</div>
			</div>

			<div className="mt-20">
				<h1 class="text-4xl flex justify-center mb-20">What We Do</h1>
				<div className="flex gap-10 m-10">
					{homewwd.map((props) => {
						return (
							<>
								<div class="card w-1/3 p-10 bg-">
									<props.wwdIcon
										size={45}
										color="gray"
										className="ml-41 mb-10"
									/>
									<h2 class="text-center text-xl mb-2">
										{props.wwdHead}
									</h2>
									<p class="text-center text-gray-400">
										{props.wwdInfo}
									</p>
								</div>
							</>
						);
					})}
				</div>
			</div>

			

			<div className="h-150">
				<h1 className="text-3xl flex justify-self-center my-20">
					Featured Projects
				</h1>
				<div className="h-100 w-150 flex flex-col justify-self-center rounded-2xl shadow-black shadow-2xl">
					<img src={Mirfeez} alt="" />
					<h1 className="text-xl ml-7 mt-5">Portfolio Website</h1>
					<a
						href="https://mirfeez.github.io/Mirfeez-portfolio/"
						className="featured-project text-gray-400 ml-7 mt-2 cursor-pointer"
					>
						View Project
					</a>
				</div>
			</div>
			<div>
				<div className="flex justify-between my-20  mx-15">
					<div>
						<h1 className="text-3xl mb-5">Why Choose Us?</h1>
						<ul className="lists">
							<li>✓ &nbsp; Clean, Maintainable code</li>
							<li>✓ &nbsp; Focused on Performance and Usability</li>
							<li>✓ &nbsp; Clear Communication and timely delivery</li>
						</ul>
					</div>
					<div>
						<div className="flex flex-col justify-center rounded-2xl border-purple-900 border p-10 mr-10">
							<h1 className="mb-6">Have a Project In Mind?</h1>
							<a
								href="/Contact"
								className="px-6 py-3 w-35 bg-purple-600 text-white rounded-lg cursor-pointer"
							>
								Get In Touch
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
