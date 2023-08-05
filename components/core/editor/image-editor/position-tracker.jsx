export const PositionTracker = () => {
	return (
		<>
			<div class="relative grid w-12 h-12 grid-cols-3 p-1 bg-white border border-gray-200 rounded-lg place-content-around place-items-center aspect-square  ">
				<div
					title="Top left"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Top center"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Top right"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Left center"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Center"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gradient-to-br from-gray-500 to-gray-800 ring-1 ring-gray-800 dark:from-gray-200 dark:to-gray-400 dark:ring-gray-200"></div>
				<div
					title="Right center"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Bottom left"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Bottom center"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
				<div
					title="Bottom right"
					class="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 dark:bg-gray-600/50"></div>
			</div>
		</>
	);
};
