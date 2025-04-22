import Header from "../components/common/Header";
// import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import dayjs from "dayjs";
import mealData from "../components/dining/data"; // Your data file
import { ChevronLeft } from "lucide-react";

const CalendarPage = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title={"Calendar"} />
			<div className="min-h-screen bg-gray-900 text-white p-6 space-y-8">
				{/* Back Button & Date Header */}
				<div className="flex items-center gap-2">
					<ChevronLeft className="w-5 h-5" />
					<button className="text-lg">Back</button>
				</div>

				<div className="text-center">
					<h1 className="text-5xl font-bold">{dayjs(selectedDate).format("dddd,")}</h1>
					<h1 className="text-5xl font-bold">{dayjs(selectedDate).format("MMM D")}</h1>
				</div>

				{/* Date Selector */}
				<div className="overflow-x-auto">
					<div className="flex space-x-6 text-gray-400 justify-center w-max px-4">
					{Array.from({ length: 7 }).map((_, index) => {
						const date = dayjs(selectedDate).add(index - 3, "day");
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

				{/* Schedule Today */}
				<h2 className="text-2xl font-bold text-center">Schedule Today</h2>

				{/* Meals List */}
				<div className="space-y-4">
					{mealData
					.filter((food) => dayjs(food.date).isSame(selectedDate, "day"))
					.map((food) => (
						<div
						key={food.name}
						className="bg-blue-500 text-white p-4 rounded-2xl shadow-md space-y-1"
						>
						<p className="text-sm opacity-70">{food.time}</p>
						<h3 className="text-xl font-bold">{food.name}</h3>
						<p className="text-sm">Total Calories: {food.calories}</p>
						<p className="text-sm">Meal Eaten: {food.name}</p>
						</div>
					))}
				</div>
				</div>

		</div>
	);
};
export default CalendarPage;