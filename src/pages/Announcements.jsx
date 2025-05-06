import Header from "../components/common/Header";
import { motion } from "framer-motion";

//imports for images
import crispyChickenBurgerImage from '../assets/images/crispy_chicken_burger.jpg'; // Assuming it's a .jpg, adjust if different
import veganBowlImage from '../assets/images/vegan_bowl.jpg';

const announcements = [
	{
	  id: 1,
	  title: "🍔 New Crispy Chicken Burger with Bacon! ",
	  date: "May 4, 2025",
	  source: "Marketplace",
	//   message: "",
	  message: "Try our new spicy deluxe burger with fries and a drink for just $5.99!",
      image: crispyChickenBurgerImage, // Use the imported image
	},
	{
	  id: 2,
	  title: "🎉 App Update v2.1",
	  date: "May 2, 2025",
	  source: "App Team",
	  message: "We've added dark mode and faster loading times. Update now!",
	},
	{
	  id: 3,
	  title: "📢 Weekend Deal",
	  date: "April 30, 2025",
	  source: "Food On Demand",
	  message: "20% off all desserts this weekend only. Don’t miss out!",
	},
	{
		id: "2",
		title: "🥗 Healthy Bowl Deal",
		date: "May 3, 2025",
		source: "Food On Demand",
		message: "Get a fresh veggie bowl with lemon dressing and a drink for only $4.50!",
        image: veganBowlImage,
	},
];

  
const AnnouncementCard = ({ title, date, source, message, image }) => {
	const randomHeight = Math.floor(Math.random() * 40) + 150;
  
	return (
	  <motion.div
		className="bg-white bg-opacity-60 backdrop-blur-md border border-gray-300 rounded-xl p-5 shadow-md hover:shadow-xl transition duration-200 overflow-hidden relative"
		whileHover={{ scale: 1.02 }}
		style={{ minHeight: `${randomHeight}px` }}
	  >
		{image && (
		  <img
			src={image}
			alt={title}
			className="w-full h-60 object-contain rounded-md mb-3"
		  />
		)}
		<h3 className="text-xl font-semibold text-gray-800">{title}</h3>
		<div className="flex justify-between items-center text-sm text-gray-500 mb-2">
		  <span>{date}</span>
		</div>
		<p className="text-gray-700 line-clamp-4 mb-6">{message}</p> {/* Added mb-6 to create space */}
		<div className="absolute bottom-3 left-3"> {/* Source badge at the bottom left */}
		  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
			{source}
		  </span>
		</div>
	  </motion.div>
	);
  };
  
const AnnouncementsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 px-4 py-6 max-w-2xl mx-auto">
      <Header title={"Announcements"} />
      <div className="mt-4 space-y-4">
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} {...a} />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
