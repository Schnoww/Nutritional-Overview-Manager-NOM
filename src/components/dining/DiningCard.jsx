import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//Creation of title cards for resturants. NOTE: when calling each parameter does not need to be filled
export default function DiningCard({ locationURL, img, text}){	
	return (
		<Link to={`/dining/${locationURL}`}>
			{/* Fade in animation */}
			<motion.div 
				className='group bg-gray-900 rounded-xl p-6 border border-gray-700 mb-8 hover:bg-gray-600'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{/*Generates a blank card*/}
				<div className='flex flex-col items-center'>
					<div className='relative w-full h-64 rounded-md overflow-hidden shadow-lg group-hover:opacity-40'>
						{/*Loads images*/}
						<img src= {img} className='object-cover w-full h-full'></img>
						{/*For images with no text*/}
						<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-10'>
							<h1 className='text-white text-2xl font-bold'>{text}</h1>
						</div>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}