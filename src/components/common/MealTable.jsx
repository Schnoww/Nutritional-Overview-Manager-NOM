import mealData from "../dining/data";
import { useState, Fragment } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

// TODO: fix chevron arrow direction not funtioning as intended

export default function MealTable({ dataType, locationText, timeText, searched, children }){
    const [expandedItems, setExpandedItems] = useState({});

    // performs the dropdown of food items
    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            [id]: !prev[id], // Toggle the clicked item
        }));
    };

    // Filters the data set based off what field is needed to be displayed
    const filtered = mealData.filter(food => {
        switch(dataType){
            case "location":
                return food.location.toLocaleLowerCase().includes(locationText.toLowerCase())
            case "time":
                return food.time.toLocaleLowerCase().includes(timeText.toLowerCase())
            case "favorite":
                return food.favorite && food.name.toLowerCase().includes(searched.toLowerCase())
            case "location/time":
                return food.location.toLowerCase().includes(locationText.toLowerCase()) && food.time.toLowerCase().includes(timeText.toLowerCase())
        }
    })

    return (
        filtered.map(food => (
          <Fragment key={food.id}>
            <tr className="hover:bg-gray-400 cursor-pointer" onClick={() => toggleExpand(food.name)}>
              <td className="py-2 px-4">{food.location}</td>
      
              {/* Image Column */}
              <td className="py-2 px-4 w-20">
                <img
                  src={food.image || "/Marketplace.png"}
                  alt={food.name}
                  className="w-16 h-16 object-cover rounded-md border border-gray-600"
                />
              </td>
      
              {/* Name Column */}
              <td className="py-2 px-4 whitespace-nowrap">{food.name}</td>
      
              {/* Chevron Column */}
              <td className="py-2 px-4 text-right w-8">
                {expandedItems[food.name] ? <ChevronDown /> : <ChevronRight />}
              </td>
            </tr>
      
            {/* Expanded Content Row */}
            {expandedItems[food.name] && (
              <tr className="bg-gray-600">
                <td colSpan="4" className="px-4 py-2">
                  <p><strong>Calories:</strong> {food.calories}</p>
                  <p><strong>Ingredients:</strong> {food.prob}</p>
                </td>
              </tr>
            )}
      
            {children}
          </Fragment>
        ))
      );
      
    }      