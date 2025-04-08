// Style imports
import { Accessibility } from "lucide-react";
import PageStarter from "../components/common/PageStarter";
// Setting card imports
import Notifications from "../components/settings/Notifications";
import UserExperience from "../components/settings/UserExperience";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import MealPlan from "../components/settings/MealPlan";
import Support from "../components/settings/Support";

export default function SettingsPage(){
	return (
		<PageStarter title={"User"}>
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<UserExperience />
				<MealPlan />
				<Security />
				<Support />
			</main>
		</PageStarter>
	)
}
