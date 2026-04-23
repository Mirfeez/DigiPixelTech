import { useState, useEffect } from "react";

const DateTime = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formattedTime = time.toLocaleTimeString("en-IN", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true, 
	});

	const formattedDate = time.toLocaleDateString("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div className="text-center">
			<h2 className="text-4xl font-mono">{formattedTime}</h2>
			<p className="text-gray-400 font-serif">{formattedDate}</p>
		</div>
	);
};

export default DateTime;
