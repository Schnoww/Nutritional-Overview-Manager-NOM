//searchbar imports
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"
import Newhaven from "c:/Users/kmdba/VSCode Capston/Nutritional-Overview-Manager-NOM/public/Newhaven.png"

const Header = ({ title }) => {
	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			{/* <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center"> */}
					<div className="h-6 w-6 text-gray-700" />
						{/* Circle Image in Top Right */}
						<img
						src="../Newhaven.png"
						alt="Profile"
						className="absolute top-4 right-4 w-12 h-12 rounded-full object-cover border-2 border-white"
						/>
					{/* </div> */}
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
				{/* <div className="relative h-screen w-screen"> */}
				{/* Rest of your app content */}
				
				{/* </div> */}
				
			</div>
		</header>
	);
};
export default Header;
