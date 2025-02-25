import React from "react";  
import SettingSection from "./SettingSection";
import { Salad } from "lucide-react";



const MealPlan = () => {
	return (
        <SettingSection icon={Salad} title={"My Meal Plan"}>
            {/* <div className='mt-4'>
                <p className='text-lg text-gray-200'>
                    Click below to view your personalized meal plan!
                </p>
                <button 
                    className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 mt-4'
            >   
                    View Meal Plans
                </button>
            </div> */}
        </SettingSection>
	);
};
export default MealPlan;