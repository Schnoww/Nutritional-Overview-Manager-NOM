import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import {auth} from "/src/config/firebase.jsx";
import { AuthCredential, EmailAuthCredential } from "firebase/auth";
//uncomment this in the future
// import SignUpPage from "../pages/SignUpPage"; 


const Profile = () => {

	//for navigation 
	const navigate = useNavigate();
	const { user, setUser } = useAuth();
	
	const handleSignOut = () => {
		try{
			auth.signOut();
			setUser(null);
			navigate('/auth/login');
		} catch (error){
			console.log("Loggout not work")
		}
		
	}

	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center justify-left mb-6'>
				<div>
					<h3 className='text-lg font-semibold text-gray-100'>{user.email}</h3>
					{/* <p className='text-gray-400'>{user.email}</p> */}
				</div>
			</div>
			<div className='mt-4'>
				<button 
					onClick={handleSignOut}
					className='bg-rose-400 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded transition duration-200'>
					Sign Out
				</button>
			</div>
		</SettingSection>
	);
};

export default Profile;