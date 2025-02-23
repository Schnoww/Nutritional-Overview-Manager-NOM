import { Accessibility } from "lucide-react";
import Header from "../components/common/Header";
import Notifications from "../components/settings/Notifications";
import UserExperience from "../components/settings/UserExperience";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import MealPlan from "../components/settings/MealPlan";
import Support from "../components/settings/Support";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<UserExperience />
				<MealPlan />
				<Security />
				<Support />
			</main>
		</div>
	);
};
export default SettingsPage;
