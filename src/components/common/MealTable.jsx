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

    return(
        filtered.map(food => (
            <Fragment key={food.id}>
                <tr className="hover:bg-gray-400 cursor-pointer" onClick={() => toggleExpand(food.name)}>
                    {/* <td>{food.location}</td> */}
                    <td className="">
                        {food.name}
                        {/* remove the food.id below this line to fix the chevron issue */}
                        <span className="float-right font-bold ml-2">{expandedItems[food.id] ? <ChevronDown/> : <ChevronRight/>}</span>
                    </td>
                </tr>
                {expandedItems[food.name] && (
                    <tr className="group bg-gray-600 p-4">
                        <td colSpan="2">
                            <div className="">
                                <p><strong>Calories:</strong> {food.calories}</p>
                                <p><strong>Ingredients:</strong> {food.prob}</p>
                            </div>
                        </td>
                    </tr>
                )}
                {/* {console.log(filtered)} */}
                {children}
                
            </Fragment>
        ))
    )
}