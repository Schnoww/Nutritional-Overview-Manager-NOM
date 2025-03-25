import SettingSection from "./DiningSection";

const Marketplace = () => {
	return (
		<SettingSection>
			<div className='flex flex-col items-center mb-6'>
				<div className='relative w-full h-64 rounded-md overflow-hidden shadow-lg'>
					<img
						src='/The Marketplace Food Hero Image (2)_tcm17-20613.png'
						alt='Marketplace'
						className='object-cover w-full h-full'
					/>
					{/**/}
					<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-10'> {/* Change 50 to 30 */}
						<h2 className='text-white text-2xl font-bold'></h2>
					</div>
				</div>
			</div>
		</SettingSection>
	);
};

export default Marketplace;
