import Header from "../components/common/Header";
import UserInfo from "../components/User/UserInfo";
import Profile from "../components/settings/Profile";

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<UserInfo />
				
			</main>
		</div>
	);
};
export default UsersPage;
