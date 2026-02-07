const Contact = () => {
	return (
		<>
			{/* <p className="text-6xl">*idg thel style add aakava /// </p> */}
			<div className="flex flex-col p-10">
				<h1>Let's Talk — If It's the Right Fit</h1>
				<p>
					We specialize in frontend-focused web development and UI work. We
					don't take on backend-heavy projects or rushed. If you're serious
					about quality and performance, you're in the right place.
				</p>
			</div>
			<div className="flex flex-col p-10">
				<h1>What Happens Next</h1>
				<p>1. We review your request within 24-48 hours</p>
				<p>2. If it's a fit, we'll suggest a short call or next steps</p>
				<p>3. If it's not, we'll tell you honestly-no ghosting</p>
			</div>
			<div className="flex flex-col p-10">
				<h1>Before You Reach Out</h1>
				<p>Have a clear project or goal</p>
				<p>Understand we focus on frontend work only</p>
				<p>Are open to a focused scope and clear requirements</p>
			</div>
			<div className="contact relative w-full min-h-screen flex items-center justify-center px-4">
				{/* dark overlay */}
				<div className="absolute inset-0 bg-black/70 "></div>

				{/* form container */}
				<div className="relative z-10 w-full max-w-xl backdrop-blur-md bg-white/3 border border-purple-500/30 rounded-2xl shadow-xl p-8">
					<h1 className="text-3xl font-bold text-center text-white mb-8">
						Contact Us
					</h1>

					<form className="flex flex-col gap-6">
						<div>
							<p>Enter Your Name</p>
							<input
								type="text"
								placeholder="Your Name..."
								className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
								required
							/>
						</div>

						<div>
							<p>Enter your Email</p>
							<input
								type="email"
								placeholder="Your Email..."
								className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
								required
							/>
						</div>

						<div>
							<p>Project Type :</p>
							<select
								name="project-type"
								id=""
								required
								className="options bg-transparent"
							>
								<option value="" disabled selected>
									Select a project type
								</option>
								<option value="Landing-page" className="text-black">
									Landing page
								</option>
								<option
									value="UI-implementation(design→code)"
									className="text-black"
								>
									UI implementation (design → code)
								</option>
								<option
									value="Frontend-optimization"
									className="text-black"
								>
									Frontend optimization
								</option>
								<option value="other" className="text-black">
									other
								</option>
							</select>
						</div>

						<div>
							<p>Project Scope :</p>
							<select
								name="project-scope"
								id=""
								className="options bg-transparent"
								required
							>
								<option value="" disabled selected>
									Select a project scope
								</option>
								<option value="1-3-pages">1-3 pages</option>
								<option value="4-6-pages">4-6 page</option>
								<option value="Design-only">Design only</option>
								<option value="custom">custom</option>
							</select>
						</div>

						<div>
							<p>Timeline :</p>
							<select
								name="Timeline"
								id=""
								className="options bg-transparent"
								required
							>
								<option value="" disabled selected>
									Select a project type
								</option>
								<option value="ASAP (1-2 weeks)">
									ASAP (1-2 weeks)
								</option>
								<option value="Design-only">3-4 weeks</option>
								<option value="Design-only">Flexible</option>
							</select>
						</div>

						<div>
							<p>Budget Range </p>
							<select
								name="budget"
								id=""
								className="options bg-transparent"
								required
							>
								<option value="" disabled selected>
									Select a project type
								</option>
								<option value="Under-₹15,000">Under ₹15,000</option>
								<option value="₹15,000-₹25,000">₹15,000-₹25,000</option>
								<option value="₹25,000-₹35,000">₹25,000-₹35,000</option>
								<option value="above ₹35,000">above ₹35,000</option>
							</select>
						</div>

						<div>
							<p>Design Availability</p>
							<input
								type="radio"
								name="Availability"
								value="Yes"
								className=""
								required
							/>
							Yes
							<input
								type="radio"
								name="Availability"
								value="No"
								className="ml-5"
								required
							/>
							No
						</div>

						<div>
							<p>Project Details</p>
							<textarea
								placeholder="Briefly describe what you want to build and the goal of the project.."
								rows="4"
								className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2 resize-none"
								required
							/>
						</div>

						<p className="flex justify-self-center text-xs">
							* We focus on frontend-only projects and limited scopes.
							While our studio is growing, our standards for clarity,
							communication, and execution are not.
						</p>
						<button
							type="submit"
							className="mt-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 py-3 rounded-xl font-semibold text-white shadow-lg"
							onsubmit={() => {
								alert("We will soon get in touch");
							}}
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
