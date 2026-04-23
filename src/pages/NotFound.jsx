import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-linear-to-br   text-white px-6">
			<div className="text-center">
				<h1 className="text-8xl font-extrabold tracking-widest">404</h1>

				<p className="mt-4 text-xl text-gray-300">
					The page you’re looking for doesn’t exist.
				</p>

				<Link
					to="/"
					className="inline-block mt-8 px-8 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 hover:bg-gray-200 transition duration-300 shadow-lg"
				>
					Go Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
