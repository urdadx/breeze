/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CropIcon, DownloadIcon, ImagePlus, SmilePlus, Type, Wand2Icon } from "lucide-react";

export const CommandBar = () => {
	return (
		<>
			<div className="mb-4 w-auto flex items-center bg-white  border border-l-0 border-r-0 md:border-l-[1px] md:border-r-[1px] border-gray-200 shadow-md backdrop-blur-md px-3 py-2 md:rounded-xl">
				<div className="flex items-center p-2 bg-transparent cursor-pointer space-x-2 hover:bg-slate-100  rounded-xl">
					<img
						className="w-6 h-6"
						alt="twitter"
						src="https://img.icons8.com/color/28/twitter--v1.png"
					/>
					<h3 className="	">
						Twitter <small>(1200 x 240)</small>{" "}
					</h3>
				</div>
				<div className="m-2 h-8 border-r bg-gray-400" />
				<div className="flex items-center p-2 bg-transparent cursor-pointer space-x-2 hover:bg-slate-100  rounded-xl">
					<Wand2Icon size={17} />
					<h3 className=""> Templates</h3>
				</div>
				<div className="m-2 h-8 border-r bg-gray-400" />

				<div className="flex items-center rounded-xl p-2 bg-transparent cursor-pointer space-x-2 hover:bg-slate-100">
					<Type size={16} />
				</div>

				<div className="flex items-center rounded-xl p-2 cursor-pointer bg-transparent space-x-2 hover:bg-slate-100">
					<ImagePlus size={16} />
				</div>

				<div className="flex items-center rounded-xl p-2 bg-transparent cursor-pointer space-x-2 hover:bg-slate-100  ">
					<SmilePlus size={16} />
				</div>
				<div className="m-2 h-8 border-r bg-gray-400" />
				<div className="flex items-center p-2 bg-transparent space-x-2 cursor-pointer hover:bg-slate-100  rounded-xl">
					<CropIcon size={16} />
					<h3 className="">Crop</h3>
				</div>

				<div className="m-2 h-8 border-r bg-gray-400" />
				<Button className=" bg-blue-600 flex items-center cursor-pointer py-2 px-6 space-x-4 rounded-lg hover:bg-blue-500">
					<DownloadIcon size={16} />
					<h3 className="font-semibold">Download</h3>
				</Button>
			</div>
		</>
	);
};
