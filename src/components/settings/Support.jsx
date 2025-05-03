import { Wrench } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	const handleExternalRedirect = () => {
		window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfox4mTnJndbf0JQWjAOR7rBNTUccS3KWl9pEU3nGXMRhqr0g/viewform?usp=header'
	};
	
	return (
		<SettingSection icon={Wrench} title={"Support"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
			  <button onClick={handleExternalRedirect}
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
					transition duration-200'
					>
					Feedback Form
				</button>
			</div>
		</SettingSection>
	);
};
export default Profile;
