import React, { useState } from "react"; // Import React and useState hook
import { HeartIcon, CalendarIcon } from "@heroicons/react/24/solid"; // Import icons for "like" and "calendar"
import iniData from "./data.jsx"; // Import initial data

const Marketplace = () => {
	// State to track expanded items in the list
	const [expandedItems, setExpandedItems] = useState({});
	
	// Function to toggle the expanded state of an item when clicked
	const toggleExpand = (name) => {
		// Toggle the expanded state for the clicked food item
		setExpandedItems((prev) => ({ ...prev, [name]: !prev[name] }));
	};

	// Filter the food items that belong to the 'Marketplace' location
	const filteredFood = iniData.filter((food) => food.location === "Marketplace");

	// Function to mark a food item as a favorite
	const AddFavs = (food) => { food.favorite = true };

	// Function to add the food item to the calendar
	const AddtoCalendar = (food) => {
		const today = new Date().toDateString(); // Get today's date as a string
		if (!food.dates) { // If dates array doesn't exist, create one
			food.dates = [];
		}
		// Check if the food item has already been added for today
		const alreadyAdded = food.dates.some(d => new Date(d).toDateString() === today);
		if (!alreadyAdded) { // If not already added, add today's date to the dates array
			food.dates.push(new Date());
		}
	};

	return (
		<div className="w-full flex justify-center p-6 bg-gray min-h-screen">
			<div className="w-full max-w-3xl space-y-4">
				{/* Header for the Marketplace section */}
				<h1 className="text-4xl font-bold text-white text-center mb-6">Marketplace</h1>

				{/* Render each food item */}
				{filteredFood.map((food) => (
					<div
						key={food.name} // Key for the list item
						className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
						onClick={() => toggleExpand(food.name)} // Toggle expansion on click
					>
						<div className="flex-1">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-4">
									{/* Food image */}
									<img
										src={food.image || "../Marketplace.png"} // Fallback image if none exists
										alt={food.name}
										className="w-16 h-16 object-cover rounded-lg border border-gray-600"
									/>
									{/* Food name */}
									<div className="text-white font-semibold text-lg">{food.name}</div>
								</div>
								<div className="flex gap-3">
									{/* Like button */}
									<button className="flex items-center gap-1 text-red-500 hover:text-red-600" onClick={() => AddFavs(food)}>
										<HeartIcon className="h-5 w-5" />
										<span className="text-sm">Like</span>
									</button>
									{/* Add to Calendar button */}
									<button className="flex items-center gap-1 text-blue-500 hover:text-blue-600" onClick={() => AddtoCalendar(food)}>
										<CalendarIcon className="h-5 w-5" />
										<span className="text-sm">Calendar</span>
									</button>
								</div>
							</div>
							{/* Display food place */}
							<div className="text-sm text-white mt-1">{food.place}</div>

							{/* Conditionally render food details if expanded */}
							{expandedItems[food.name] && (
								<div className="mt-3 text-sm text-white space-y-1">
									<p>
										<strong>Calories:</strong> {food.calories}
									</p>
									<p>
										<strong>Ingredients:</strong> {food.prob}
									</p>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Marketplace;