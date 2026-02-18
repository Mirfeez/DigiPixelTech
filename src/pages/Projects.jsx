import Restaurant from "../img/Projects/Restaurant.png";
import Mirfeez from "../img/Projects/Portfolio.Mirfeez.png";
import Interior from "../img/Projects/interior.png";
import spicyRestaurent from "../img/Projects/spicy-restuarent.png";
import Azeem from "../img/Projects/Portfolio.Azeem.png";
import loveCalc from "../img/Projects/love-calc.png"

const Projects = () => {
	const projectInfo = [
		{
			title: "Portfolio Website",
			client: "Self",
			img: Mirfeez,
			webLink: "https://mirfeez.github.io/Mirfeez-portfolio/",
			info: "A responsive and performance-focused portfolio website built to showcase design projects with a clean UI, fast loading speeds, and a professional online presence.",
		},
		{
			title: "Portfolio Website",
			client: "Self",
			img: Azeem,
			webLink: "https://azeem-portfolio-new.netlify.app",
			info: "A clean personal portfolio website designed to showcase projects, technical skills, and development work. Built with a focus on performance, simplicity, and clear presentation to highlight experience and growth as a developer.",
		},
		{
			title: "Restaurent Website",
			client: "College Project",
			img: spicyRestaurent,
			webLink: "https://spicy-garden-demo.netlify.app/",
			info: "A beginner-level restaurant website created to present menu items, basic business information, and contact details. The project focused on learning core web development fundamentals and building a functional static website.",
		},

		{
			title: "Interior Portfolio Website",
			client: "Client",
			img: Interior,
			webLink: "https://haseeb-interior.netlify.app/",
			info: "One of our early projects built while developing our foundational skills. Though not fully responsive, it helped us gain real-world experience and shaped our growth into creating modern, performance-focused websites today.",
		},
		{
			title: "Restaurant Website",
			client: "College Project",
			img: Restaurant,
			webLink: "https://github.com/Silent1killer/Thedesires",
			info: "An early-stage website created during our college studies. The project focused on understanding core web structure and user experience basics, forming the foundation for our current standards in responsive and performance-driven web development.",
		},
		{
			title: "Love Calculator",
			client: "Simple Frontend Project",
			img: loveCalc,
			webLink: "https://p5-love-calculator.onrender.com",
			info: "A Simple Frontend Project for practice to understand the calculation and to get creative, created during our college studies. And to understand the concept of javascript",
		},
	];

	return (
		<>
			<div className="project-head bg-img-projects bg-[url('img/banner/Project.png')] font-serif w-full h-150 bg-cover flex flex-col justify-center leading-normal gap-2">
				<h1 className="ml-10 text-5xl">Discover the Projects </h1>
				<h1 className="ml-10 text-3xl">that we have worked</h1>
				<p className="ml-10">
					An overview of the projects which successfully designed and
					developed.
				</p>
			</div>

			<div className="project-section font-serif">
				<h1 className="mt-10 ml-10 text-5xl flex">Projects:-</h1>

				{/* card  */}
				{projectInfo.map((props, idx) => {
					return (
						<div key={idx} className="home-project m-10 h-150">
							<div className="h-100 w-150 flex flex-col justify-self-center rounded-2xl shadow-black shadow-2xl">
								<img className="h-71" src={props.img} alt="" />
								<h1 className="text-xl mt-5">
									<span className="flex justify-self-center font-mono">
										{idx + 1}.{props.title}
									</span>
								</h1>
								<a
									target="_blank"
									href={props.webLink}
									className=" mt-2 cursor-pointer"
								>
									<span className="featured-project justify-self-center flex px-2 py-1 rounded text-white bg-purple-600">
										View Project
									</span>
								</a>
							</div>
							<div className="project-info m-3 text-center border-b-2 py-3 pb-8">
								<h1 className="text-2xl mb-2 justify-self-center">{props.client}</h1>
								<p className="parah text-gray-400">{props.info}</p>
							</div>
						</div>
					);
				})}
				{/* card finishing  */}
			</div>
		</>
	);
};

export default Projects;
