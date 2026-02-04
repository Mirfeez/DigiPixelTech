import React from "react";

const Contact = () => {
	return (
		<div className=" text-black h-150 m-20 p-20 flex justify-center bg-purple-600">
			<form
				onSubmit={() => {}}
				className="flex flex-col justify-center items-center w-180 bg-white  rounded-2xl"
			>
				<h1 className="m-10 flex justify-center text-2xl">Contact Us</h1>
				<input
					type="text"
					className="border-b-2 mb-8 py-2 px-2 w-150"
					placeholder="Enter Your Name"
				/>
				<input
					type="text"
					className="border-b-2 mb-8 py-2 px-2 w-150"
					placeholder="Enter Your E-mail"
				/>
				<input
					type="text"
					className="border-b-2 mb-8 py-2 px-2 w-150"
					placeholder="Enter Your Message"
				/>
				<button className="py-2 px-4 bg-purple-500 rounded-2xl">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
