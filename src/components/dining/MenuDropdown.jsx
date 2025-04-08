// Library imports
import { useState } from "react";
import MealTable from "../common/MealTable";

// Creates a dropdown effect
export default function MenuDropdown({ time, location, img, children}){
    const [expandedItems, setExpandedItems] = useState(false);

    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            [id]: !prev[id], // Toggle the clicked item
        }));
    };


    return(
        <div className="w-96">
            <h1 className="font-semibold text-3xl justify-self-center cursor-pointer" onClick={() => toggleExpand(true)}>{time}</h1>
                {expandedItems[true] &&
                    <MealTable dataType={"location/time"} locationText={location} timeText={time}><img src={img}/></MealTable>
                }
                {children}
        </div>
    )
}