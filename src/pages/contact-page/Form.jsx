import React, { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import emailjs from "@emailjs/browser";

const Form = () => {
	
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const contactForm = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_xnh385t",
				"template_h8zsgzd",
				contactForm.current,
				"gFAIzVqxU0aFW8R3g",
			)
			.then(() => {
				alert(`Thank You ${form.name}, We'll Get Back To You Soon!`);
				contactForm.current.reset();
			})
			.catch((error) => {
				console.error("FAILED...", error);
			});
	};

	return (
		<div className="contact relative w-full min-h-screen flex items-center justify-center px-4">
			{/* dark overlay */}
			<div className="absolute inset-0 "></div>

			{/* form container */}
			<div className="form-start relative z-10 w-full max-w-xl backdrop-blur-md bg-white/3 border border-purple-500/30 rounded-2xl shadow-xl p-8">
				<h1 className="text-3xl font-bold text-center text-white mb-8">
					Contact Us
				</h1>

				<form
					ref={contactForm}
					id="contactForm"
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 text-sm font-mono leading-5 "
				>
					<div className="bg-black/5 rounded-2xl p-2 shadow-[0_0_5px_black]">
						<div>
							<label className="flex gap-2">
								Enter your Details...
								<ArrowDown size={20} />{" "}
							</label>
							<input
								name="name"
								type="text"
								onChange={handleChange}
								value={form.name}
								placeholder="Your Name..."
								className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
								required
							/>
						</div>

						<div>
							<input
								name="email"
								type="email"
								onChange={handleChange}
								value={form.email}
								placeholder="Your Email..."
								className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
								required
							/>
						</div>
					</div>

					<div className=" bg-black/5 rounded-2xl p-2 shadow-[0_0_5px_black]">
						<p>Message</p>
						<textarea
							name="message"
							value={form.details}
							onChange={handleChange}
							placeholder="Briefly describe.."
							rows="4"
							className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2 resize-none"
							required
						/>
					</div>

					<button
						type="submit"
						className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 py-3 rounded-xl cursor-pointer font-semibold text-white shadow-lg"
					>
						Send Message
					</button>
				</form>
				<p className="text-gray-400 mt-1 flex justify-self-center text-sm text-center font-[cursive]">
					*We focus on frontend-only projects and limited scopes. While our
					studio is growing, our standards for clarity, communication, and
					execution are not.
				</p>
			</div>
		</div>
	);
};

export default Form;
