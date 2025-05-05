import Header from "../components/common/Header";
import React, { useState } from "react";
import dayjs from "dayjs";
import iniData from "../components/dining/data.jsx";

const CalendarPage = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [minutesPerPixel, setMinutesPerPixel] = useState(.8); // Dynamic minutes per pixel

	// Maps "Breakfast" to times
	const timeBlocks = {
		Breakfast: { start: 7 * 60, end: 11 * 60 },
		Lunch: { start: 12 * 60, end: 16 * 60 },
		Diner: {start: 17 * 60, end: 20 * 60}
	};

	const startTime = 7 * 60; // 7:00 AM
	const endTime = 20 * 60; // 4:00 PM
	const totalHeight = (endTime - startTime) * minutesPerPixel;

	const handleMinutesPerPixelChange = (event) => {
		setMinutesPerPixel(Number(event.target.value)); // Update the minutes per pixel dynamically
	};

	return (
		<div className="flex-1 overflow-auto bg-gray-900 text-white min-h-screen">
			<Header title="Calendar" />
			<div className="p-6 space-y-8">
				<div className="text-center">
					<h1 className="text-5xl font-bold">{dayjs(selectedDate).format("dddd,")}</h1>
					<h1 className="text-5xl font-bold">{dayjs(selectedDate).format("MMM D")}</h1>
				</div>

				{/* Date Selector */}
				<div className="overflow-x-auto">
					<div className="flex space-x-6 text-gray-400 justify-center w-max px-4">
						{Array.from({ length: 16 }).map((_, index) => {
							const date = dayjs(selectedDate).add(index - 7, "day");
							const isSelected = dayjs(date).isSame(selectedDate, "day");
							return (
								<button
									key={index}
									onClick={() => setSelectedDate(date.toDate())}
									className={`text-center min-w-[50px] ${
										isSelected ? "text-blue-400 font-bold" : ""
									}`}
								>
									<div>{date.format("DD")}</div>
									<div>{date.format("ddd")}</div>
								</button>
							);
						})}
					</div>
				</div>

				<h2 className="text-2xl font-bold text-center">Schedule Today</h2>

				{/* Adjust the height of the time blocks dynamically */}
				<div className="flex">
					{/* Time Labels */}
					<div className="w-1/5 pr-4 text-sm text-gray-400">
						{Array.from({ length: 14 }).map((_, i) => {
							const hour = 7 + i;
							const displayHour = hour > 12 ? hour - 12 : hour;
							const ampm = hour >= 12 ? "PM" : "AM";
							return (
								<div
									key={i}
									style={{ height: 60 * minutesPerPixel }} // Adjust label height dynamically
									className="flex items-start justify-end pr-2"
								>
									{`${displayHour}:00 ${ampm}`}
								</div>
							);
						})}
					</div>

					{/* Timeline + Meals */}
					<div className="w-4/5 relative border-l border-gray-700" style={{ height: totalHeight }}>
						{/* Hour lines */}
						{Array.from({ length: 14 }).map((_, i) => (
							<div
								key={i}
								className="absolute w-full border-t border-gray-700"
								style={{ top: i * 60 * minutesPerPixel }}
							/>
						))}

						{/* Meal boxes */}
						{iniData
	.filter((food) =>
		(Array.isArray(food.dates) &&
		 food.dates.some((d) => dayjs(d).isSame(selectedDate, "day"))) ||
		(food.date && dayjs(food.date).isSame(selectedDate, "day"))
	)
	
	.map((food, index) => {
		const block = timeBlocks[food.time];
		if (!block) return null;

		const top = (block.start - startTime) * minutesPerPixel;
		const height = (block.end - block.start) * minutesPerPixel;

		return (
			<div
				key={food.name + index}
				className="absolute bg-blue-500 rounded-xl shadow-lg px-4 py-3 left-4 right-4"
				style={{ top: `${top}px`, height: `${height}px` }}
			>
				<div className="flex items-center space-x-4">
					{/* Image on the left */}
					<img
						src={food.image || "../Marketplace.png"}
						alt={food.name}
						className="w-24 h-24 object-cover rounded-lg border border-gray-600"
					/>

					{/* Text on the right */}
					<div className="flex flex-col space-y-1 text-left text-white">
						<p className="text-base opacity-80">{food.time}</p>
						<h3 className="text-2xl font-bold">{food.name}</h3>
						<p className="text-base">Calories: {food.calories}</p>
					</div>
				</div>
			</div>
		);
	})}



					</div>
				</div>
			</div>
		</div>
	);
};

export default CalendarPage;