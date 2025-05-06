import { BarChart2, Calendar, DollarSign, Locate, Megaphone, Utensils, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, Star } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../../public/NOMlogo.png";


// might have scaling issues on certain window sizes if there are too many side bar elements
// TODO: when collapsed add NOM logo to top of list. when open display "nutritional overview manager" next to hamburger

const SIDEBAR_ITEMS = [
	// { name: "Overview", icon: BarChart2, color: "#6366f1",href: "/", },
	{ name: "Dining", icon: Utensils, color: "#FFFFFF", href: "/dining", },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	// { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Announcements", icon: Megaphone, color: "#ff0000", href: "/announcements" },
	{ name: "Calendar", icon: Calendar, color: "#FFFF00", href: "/calendar" },
	// { name: "Dietary Tracking", icon: Locate, color: "#A020F0", href: "/dietary_tracking" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
	{ name: "Favorites", icon: Star, color: "#6EE7B7", href: "/favorites" },
];

export default function Sidebar(){
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			{/* sets background of sidebar & text */}
			<div className='h-full bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 text-gray-100'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>
				<div className="flex items-center space-x-3 px-2">
				<img
					src={logo} // or "/logo.png" if in public
					alt="Logo"
					className="w-8 h-8 object-contain"
				/>
				<AnimatePresence>
					{isSidebarOpen && (
						<motion.span
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -10 }}
							className="text-white font-semibold text-md"
						>
							Nutritional Overview Manager
						</motion.span>
					)}
				</AnimatePresence>
			</div>

				{/* the items within the sidebar */}
				<nav className='mt-8 flex-grow'>
					{/* Maps the dictionary list */}
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}> {/* This line is what does the transfer from page to page */}
							{/* what handles the style of the hovered color over each item */}
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'> 
								{/* What pairs the icon next to each sidebar option */}
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};