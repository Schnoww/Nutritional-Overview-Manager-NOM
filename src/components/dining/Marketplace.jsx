import InnerCard from "../common/InnerCard";
import PageStarter from "../common/PageStarter";
import MenuDropdown from "./MenuDropdown";

export default function Marketplace(){
	return (
		<PageStarter title={"Marketplace"}>
			{/* Breakfast */}
			<InnerCard>
				<MenuDropdown time={"Breakfast"} location={"Marketplace"}/>
			</InnerCard>

			{/* Lunch */}
			<InnerCard>
				<MenuDropdown time={"Lunch"} location={"Marketplace"}/>
			</InnerCard>

			{/* Dinner */}
			<InnerCard>
				<MenuDropdown time={"Dinner"} location={"Marketplace"}/>
			</InnerCard>
		</PageStarter>
	)
}