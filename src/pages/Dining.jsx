// Style imports
import PageStarter from "../components/common/PageStarter";
import DiningCard from "../components/dining/DiningCard";

export default function DiningPage(){
	return (
		<PageStarter title="Dining">
			{/*Container for all the dining cards*/}
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
					<DiningCard img={'/Marketplace.png'} locationURL={"marketplace"}/>
					<DiningCard img={'/FOD.png'} locationURL={"fod"} resturantName={"Food on Demand"}/>
					{/* <DiningCard img={'/Jazzmans.png'} locationURL={"jazzmans"}/>
					<DiningCard img={'/Moes.jpg'} locationURL={"moes"}/>
					<DiningCard img={'/WOW.jpg'} locationURL={"wow"}/> */}
			</main>
		</PageStarter>
	)
}
