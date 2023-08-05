import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CardDescription } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export const Watermark = () => {
	return (
		<>
			<h3 className="my-3 font-semibold">Watermark</h3>
			<div className="my-4 grid grid-cols-2 gap-2">
				<Select>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Select type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="text">Text</SelectItem>
						<SelectItem value="logo">Logo</SelectItem>
						<SelectItem value="none">None</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Position" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="bottom-right">Bottom Right</SelectItem>
						<SelectItem value="bottom-left">Bottom Left</SelectItem>
						<SelectItem value="top-right">Top Right</SelectItem>
						<SelectItem value="top-left">Top Left</SelectItem>
						<SelectItem value="center">Center</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="my-6">
				<CardDescription className="">Choose logo image</CardDescription>
				<div className="flex justify-center w-full place-items-center z-0 my-6">
					<Button
						className="flex items-center gap-2 px-10 py-5"
						variant="outline">
						<ImageIcon className="text-blue-600" size={17} />
						<span className="text-blue-600 text-md">Upload Image</span>
					</Button>
				</div>
			</div>
		</>
	);
};
