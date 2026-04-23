import { useState, useRef } from "react";
import Form from "./contact-page/Form";
import { motion } from "motion/react";

const Contact = () => {
	return (
		<>
			{/* <p className="text-6xl">*idg thel style add aakava /// </p> */}
			<div className="contact-head grid md:grid-cols-3 gap-6 px-6 py-12 max-w-6xl mx-auto">
				{/* Card 1 */}
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.1,
					}}
					className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 
  transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
				>
					<h1 className="text-xl font-semibold text-purple-400 mb-4">
						Let's Talk — If It's the Right Fit
					</h1>

					<p className="text-gray-300 leading-relaxed">
						We specialize in frontend-focused web development and UI work.
						We don't take on backend-heavy projects or rushed builds. If
						you care about quality and performance, you're in the right
						place.
					</p>
				</motion.div>

				{/* Card 2 */}
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.1,
					}}
					className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 
  transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
				>
					<h1 className="text-xl font-semibold text-purple-400 mb-4">
						What Happens Next
					</h1>

					<div className="space-y-2 text-gray-300">
						<p>• We review your request within 24–48 hours</p>
						<p>
							• If it's a fit, we'll suggest a short call or next steps
						</p>
						<p>• If it's not, we'll tell you honestly — no ghosting</p>
					</div>
				</motion.div>

				{/* Card 3 */}
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.1,
					}}
					className="before-reach bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 
  transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
				>
					<h1 className="text-xl font-semibold text-purple-400 mb-4">
						Before You Reach Out
					</h1>

					<div className="space-y-2 text-gray-300">
						<p>• Have a clear project or goal</p>
						<p>• Understand we focus on frontend work only</p>
						<p>• Be open to focused scope and clear requirements</p>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<Form />
			</motion.div>
		</>
	);
};

export default Contact;
