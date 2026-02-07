import Profile from "../img/Logo/profile-logo.png";

const About = () => {
	const teamMembers = [
		{
			img: Profile,
			Name: "Mirfeez",
			Role: "Member of DPT",
			desc: "Frontend developer",
			Links: "https://mirfeez.github.io/Mirfeez-portfolio/",
			tag: "Creators",
			bgColor: "#2bfba2",
			textColor: "black",
		},
		{
			img: Profile,
			Name: "Azeem",
			Role: "Member of DPT",
			desc: "Frontend developer",
			Links: "",
			tag: "Creators",
			bgColor: "#2bfba2",
			textColor: "black",
		},
	];

	const values = [
		{
			head: "Results Over Hype",
			info: "We focus on performance, usability, and real business impact instead of chasing trends or flashy tools.",
		},
		{
			head: "Clarity and Honesty",
			info: "Clear communication, realistic timelines, and honest advice are part of every project we deliver.",
		},
		{
			head: "Quality First",
			info: "	Clean architecture, optimized performance, and maintainable code are our minimum standards.",
		},
		{
			head: "Ownership Mentality",
			info: "We take responsibility for every detail and continuously improve the products we build..",
		},
		{
			head: "Long-Term Thinking",
			info: "We build scalable solutions that grow with your businessinstead of short-term quick fixes.",
		},
		{
			head: "User-Centered Design",
			info: "Every interface is built with real users in mind intuitive, accessible, and easy to use.",
		},
	];
	return (
		<div>
			<div className="max-w-5xl mx-auto text-center mt-10">
				<h1 className="text-4xl font-semibold mb-6">Our Story</h1>

				<p className="text-lg leading-relaxed text-gray-600">
					DigiPixelTech is a modern web development studio focused on
					building fast, responsive, and performance-driven digital
					experiences. We specialize in frontend development, UI/UX
					improvements, and scalable web solutions for startups and growing
					businesses.
				</p>

				<p className="text-lg leading-relaxed text-gray-600 mt-6">
					We started DigiPixelTech because too many businesses were paying
					for websites that looked good but delivered no results. We focus
					on clean code, performance, and solving real business problems —
					not just visual design.
				</p>
			</div>

			<div className="mt-28 max-w-7xl mx-auto px-4">
				<h1 className="text-4xl text-center font-semibold mb-14">
					Our Values
				</h1>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{values.map((props, idx) => {
						return (
							<div
								key={idx}
								className="p-7 rounded-2xl border border-gray-700/40 
	bg-linear-to-b from-white/5 to-transparent
	transition-all duration-300 ease-out
	hover:border-purple-500/70
	hover:shadow-2xl
	hover:-translate-y-2
	hover:bg-white/5"
							>
								<h2 className="text-xl font-semibold mb-3">
									{props.head}
								</h2>
								<p className="text-gray-600 leading-relaxed">
									{props.info}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className="mt-20">
				<h1 className="text-3xl flex justify-center mb-10">Our Team</h1>
				<div className="flex flex-wrap gap-5 justify-center">
					{teamMembers.map((props, idx) => {
						return (
							<div
								key={idx}
								className="border w-60 h-90 flex flex-col rounded-2xl justify-around items-center p-5 mt-5"
							>
								<h1
									style={{
										backgroundColor: props.bgColor,
										color: props.textColor,
									}}
									className="-mt-1.5 rounded-full px-2 self-start"
								>
									{props.tag}
								</h1>
								<img
									src={props.img}
									alt=""
									className="h-25 w-25 rounded-full object-cover"
								/>
								<h3 className="text-lg">{props.Name}</h3>
								<p className="text-sm text-gray-500">{props.Role}</p>
								<p className="capitalize text-xl">{props.desc}</p>
								<div className="list-none flex flex-row gap-5 justify-around mt-6">
									<a
										className="px-4 py-2 flex justify-self-center hover:bg-purple-500 text-black rounded bg-purple-600 "
										href={props.Links}
										target="_blank"
									>
										View Portfolio
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
