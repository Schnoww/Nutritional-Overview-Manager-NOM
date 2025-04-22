//searchbar imports
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"

//thing for future search bar
// const [result, setResult] = useState([])
//TODO: Make header sticky

export default function Header({ title }){
	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='flex row-auto max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
				<h1 className="fixed right-0 px-4 sm:px-6 lg:px-8 text-2xl font-semibold text-white"><img src="/Unewhaven.png" className="object-scale-down"/></h1>
			</div>
		</header>
	)
}
