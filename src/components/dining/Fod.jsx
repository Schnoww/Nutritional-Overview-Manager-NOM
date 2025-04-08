// Style imports
import PageStarter from "../common/PageStarter"
import InnerCard from "../common/InnerCard"
import MenuDropdown from "./MenuDropdown";

export default function FOD(){
	return(
		<PageStarter title={"Food on Demand"}>
			{/* Breakfast */}
			<InnerCard>
				<MenuDropdown time={"Breakfast"} location={"FOD"} img={"/FOD.png"}/>
			</InnerCard>
			{/* Lunch */}
			<InnerCard>
				<MenuDropdown time={"Lunch"} location={"FOD"}/>
			</InnerCard>
				
			{/* Dinner */}
			<InnerCard>
				<MenuDropdown time={"Dinner"} location={"FOD"} />
			</InnerCard>
		</PageStarter>
	)
}