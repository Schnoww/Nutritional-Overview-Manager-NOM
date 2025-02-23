import { Wrench } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={Wrench} title={"Support"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				// Justin inputs his support here
			</div>
		</SettingSection>
	);
};
export default Profile;
