import { position } from "@/utils";

export const PositionTracker = () => {


	return (
		<>
			<div class="relative grid w-12 h-12 grid-cols-3 p-1 bg-white border border-gray-200 rounded-lg place-content-around place-items-center aspect-square">
				{
					position?.map((pos, i) => {
						return (
							<div
								key={i}
								title={pos}
								className="w-[8px] h-[8px] rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500" />
						)
					})
				}

			</div>
		</>
	);
};
