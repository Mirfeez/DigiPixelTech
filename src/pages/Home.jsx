const Home = () => {
	const homewwd = [
		{
			wwdHead: "Frontend Development",
			wwdInfo: "Building responsive, fast, and accessible user interfaces.",
		},
		{
			wwdHead: "Business Websites",
			wwdInfo:
				"Creating professional websites for businesses and portfolios.",
		},
		{
			wwdHead: "Landing Pages",
			wwdInfo:
				"Designing and developing pages focused on clarity and conversion.",
		},
	];
	return (
		<>
			<section className="text-center py-20 px-6">
				<h2 className="text-4xl font-bold mb-4">
					We Build Digital Experiences
				</h2>
				<p className="text-gray-600 max-w-xl mx-auto">
					Digipixeltech helps businesses grow with modern websites, apps
					and digital solutions.
				</p>

				<button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer">
					See Our Work
				</button>
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
								<div class="card w-1/3 p-10 bg-">
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
				<h1>Featured Projects</h1>
			</div>
			<div>
				<h1 class="text-4xl flex justify-center mb-20">How We Work</h1>
				<div className="flex flex-row ml-5">
					<div className="p-10 pr-8 w-1/4">
						<h2>1. Planning</h2>
						<p>Understanding goals and requirements.</p>
					</div>
					<div className="text-4xl flex items-center pb-9"> {`>`} </div>
					<div className="p-10 w-1/4">
						<h2>2. Design</h2>
						<p> Creating clean and usable layouts.</p>
					</div>
					<div className="text-4xl flex items-center pb-10"> {`>`} </div>
					<div className="p-8 w-1/4">
						<h2>3. Development</h2>
						<p>Building responsive front-end interfaces.</p>
					</div>
					<div className="text-4xl flex items-center pb-10"> {`>`} </div>
					<div className="p-10 w-1/4 pt-7">
						<h2>4. Delivery</h2>
						<p> Testing and final deployment.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
