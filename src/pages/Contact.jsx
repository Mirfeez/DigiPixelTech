
const Contact = () => {
	return (
		<div className="contact relative w-full min-h-screen flex items-center justify-center px-4">
			{/* dark overlay */}
			<div className="absolute inset-0 bg-black/70 "></div>

			{/* form container */}
			<div className="relative z-10 w-full max-w-xl backdrop-blur-md bg-white/3 border border-purple-500/30 rounded-2xl shadow-xl p-8">
				<h1 className="text-3xl font-bold text-center text-white mb-8">
					Contact Us
				</h1>

				<form className="flex flex-col gap-6">
					<input
						type="text"
						placeholder="Your Name..."
						className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
						required
					/>

					<input
						type="email"
						placeholder="Your Email..."
						className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
						required
					/>

					<textarea
						placeholder="Your Message..."
						rows="4"
						className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2 resize-none"
						required
					/>

					<button
						type="submit"
						className="mt-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 py-3 rounded-xl font-semibold text-white shadow-lg"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
