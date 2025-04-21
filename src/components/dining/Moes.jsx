import SettingSection from "./DiningCard";

const Moes = () => {
	return (
		<SettingSection>
			<div className='flex flex-col items-center mb-6'>
				<div className='relative w-full h-64 rounded-lg overflow-hidden shadow-lg'>
					<img
						src='Moes.jpg'
						alt='Marketplace'
						className='object-cover w-full h-full'
					/>
					{/**/}
					<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-10'> {/* Change 50 to 30 */}
						<h1 className='text-white text-2xl font-bold'></h1>
					</div>
				</div>
			</div>
		</SettingSection>
	);
};

export default Moes