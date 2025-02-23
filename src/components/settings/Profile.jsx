import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://en.wikipedia.org/wiki/University_of_New_Haven'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>Mateusz Wiszniewski</h3>
					<p className='text-gray-400'>mwisz1@unh.newhaven.edu</p>
				</div>
			</div>
		</SettingSection>
	);
};
export default Profile;
