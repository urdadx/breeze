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
import { useState } from "react";
import { watermarkOptions, watermarkPositions } from "@/utils";

export const Watermark = () => {

	const [watermarkType, setWatermarkType] = useState(watermarkOptions[0]);
	const [watermarkPos, setWatermarkPos] = useState(watermarkPositions[0])

	const handleWatermarkType = (value) => {
		setWatermarkType(value)
	}

	const handleWatermarkPos = (value) => {
		setWatermarkPos(value)
	}

	return (
		<>
			<h3 className="my-3 font-semibold">Watermark</h3>
			<div className="my-4 grid grid-cols-2 gap-2">
				<Select onValueChange={handleWatermarkType} defaultValue={watermarkType}>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Select type" />
					</SelectTrigger>
					<SelectContent>
						{
							watermarkOptions?.map((opt, i) => {
								return (
									<SelectItem key={i} value={opt}>{opt}</SelectItem>
								)
							})
						}
						
					</SelectContent>
				</Select>
				<Select onValueChange={handleWatermarkPos} defaultValue={watermarkPos}>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Position" />
					</SelectTrigger>
					<SelectContent>
						{
							watermarkPositions?.map((pos, i) => {
								return (
									<SelectItem key={i} value={pos}>{pos}</SelectItem>
								)
							})
						}
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
