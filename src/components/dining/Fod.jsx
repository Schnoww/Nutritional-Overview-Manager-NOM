import Header from "../common/Header";
import MealTimeCard from "./MealTimeCard";

export default function Fod(){
	return (
		<div className="flex-1 overflow-auto relative z-10">
			<Header title={"Food on Demand"}/>
			<div className="flex h-screen m-auto">
				<main className="justify-items-center  max-w-4x1 mx-auto py-6 px-4 lg:px-8">
					<MealTimeCard>
						<h1>Breakfast</h1>
					</MealTimeCard>
					<MealTimeCard><h1>Lunch</h1></MealTimeCard>
					<MealTimeCard><h1>Dinner</h1></MealTimeCard>
				</main>
			</div>
		</div>
	)
}
