import Header from "../components/common/Header";

//new imports from dining folder
import Marketplace from "../components/dining/Marketplace";
import Jazzmans from "../components/dining/Jazzmans";
import Fod from "../components/dining/Fod";
import Moes from "../components/dining/Moes";
import Wow from "../components/dining/Wow";

const DiningPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Dining' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                <Marketplace />
                <Fod />
                <Jazzmans />
                <Wow />
                <Moes />
			</main>
		</div>
	);
};
export default DiningPage;
