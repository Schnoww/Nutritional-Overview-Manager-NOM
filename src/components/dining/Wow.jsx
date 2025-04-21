import InnerCard from "../common/InnerCard";
import PageStarter from "../common/PageStarter";
import MenuDropdown from "./MenuDropdown";


export default function Wow(){
	return (
		<PageStarter title={"WOW"}>
			{/* Breakfast */}
			<InnerCard>
				<MenuDropdown time={"Breakfast"} location={"WOW"}/>
			</InnerCard>

			{/* Lunch */}
			<InnerCard>
				<MenuDropdown time={"Lunch"} location={"WOW"}/>
			</InnerCard>
			
			{/* Dinner */}
			<InnerCard>
				<MenuDropdown time={"Dinner"} location={"WOW"}/>
			</InnerCard>
			
			{/* All Time */}
			<InnerCard>
				<MenuDropdown time={"All Day"} location={"WOW"}/>
			</InnerCard>
		</PageStarter>
	)
}