import React, { useState } from "react";
import { HeartIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS styles for Toastify
import iniData from "./data.jsx"; // Import the data from the iniData file

const Marketplace = () => {
  const [expandedItems, setExpandedItems] = useState({}); // Track expanded items

  // Toggle the expanded state of a food item
  const toggleExpand = (name) => {
    setExpandedItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Filter the food items that belong to the 'Marketplace' location
  const filteredFood = iniData.filter((food) => food.location === "Marketplace");

  // Function to mark a food item as a favorite and show a toast notification
  const AddFavs = (food) => {
	// Check if the food is already in favorites
	if (food.favorite) {
	  toast.error(`${food.name} is already in your favorites!`, {
		autoClose: 1000, // 2 seconds
	  });
	} else {
	  food.favorite = true; // Mark the food as a favorite
	  toast.success(`${food.name} added to favorites!`, {
		autoClose: 1000, // 2 seconds
	  });
	}
  };
  
// Function to add a food item to the calendar with toast notifications
const AddtoCalendar = (food) => {
	const today = new Date().toDateString(); // Get today's date as a string
	if (!food.dates) {
	  food.dates = [];
	}
	const alreadyAdded = food.dates.some(d => new Date(d).toDateString() === today);
	if (!alreadyAdded) {
	  food.dates.push(new Date());
	  toast.success(`${food.name} added to calendar!`, {
		autoClose: 100,
	  });
	} else {
	  toast.error(`${food.name} is already in your calendar for today!`, {
		autoClose: 1000,
	  });
	}
  };
  

  return (
    <div className="w-full flex justify-center p-6 bg-gray min-h-screen overflow-y-auto">
      <div className="w-full max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Marketplace</h1>

        {/* Render each food item */}
        {filteredFood.map((food) => (
          <div
            key={food.name} // Unique key for each food item
            className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            onClick={() => toggleExpand(food.name)} // Toggle expansion on click
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={food.image || "../Marketplace.png"} // Fallback image if none exists
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded-lg border border-gray-600"
                  />
                  <div className="text-white font-semibold text-lg">{food.name}</div>
                </div>
                <div className="flex gap-3">
                  <button
                    className="flex items-center gap-1 text-red-500 hover:text-red-600"
                    onClick={() => AddFavs(food)} // Call AddFavs to mark as favorite
                  >
                    <HeartIcon className="h-5 w-5" />
                    <span className="text-sm">Like</span>
                  </button>
                  <button
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
                    onClick={() => AddtoCalendar(food)} // Calendar button
                  >
                    <CalendarIcon className="h-5 w-5" />
                    <span className="text-sm">Calendar</span>
                  </button>
                </div>
              </div>
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

              {/* Display dietary labels */}
              {food.dairyFree && (
                <div className="mt-2 px-3 py-1 text-blue-600 font-bold bg-blue-50 rounded-full inline-block">
                  Dairy Free
                </div>
              )}

              {food.keto && (
                <div className="mt-2 px-3 py-1 text-yellow-600 font-bold bg-yellow-50 rounded-full inline-block">
                  Keto
                </div>
              )}

              {food.peanutAllergy && (
                <div className="mt-2 px-3 py-1 text-orange-600 font-bold bg-orange-50 rounded-full inline-block">
                  Peanut Allergy
                </div>
              )}

              {food.pescatarian && (
                <div className="mt-2 px-3 py-1 text-teal-600 font-bold bg-teal-50 rounded-full inline-block">
                  Pescatarian
                </div>
              )}

              {food.vegan && (
                <div className="mt-2 px-3 py-1 text-green-600 font-bold bg-green-50 rounded-full inline-block">
                  Vegan
                </div>
              )}

              {food.vegetarian && (
                <div className="mt-2 px-3 py-1 text-purple-600 font-bold bg-purple-50 rounded-full inline-block">
                  Vegetarian
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ToastContainer will show the notifications */}
      <ToastContainer />
    </div>
  );
};

export default Marketplace;
