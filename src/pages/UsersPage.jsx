import Header from "../components/common/Header";

const userStats = {
	totalUsers: 1,
	newUsersToday: 1,
	activeUsers: 1,
	churnRate: "69%",
};

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />
		</div>
	);
};
export default UsersPage;
