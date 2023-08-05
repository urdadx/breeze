import {
	ArrowRightToLine,
	ArrowDownToLine,
	ArrowUpToLine,
	ArrowLeftToLine,
	Trash2,
} from "lucide-react";
import { CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { HexColorPicker } from "react-colorful";
import { useState, useRef, useCallback } from "react";
import useClickOutside from "@/hooks/use-click-outside";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export const TextEditor = () => {
	const popover = useRef();
	const [isOpen, toggle] = useState(false);
	const [color, setColor] = useState("#000000");

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	return (
		<div className="p-4">
			<h3 className="mb-1 text-xl font-semibold">Text</h3>
			<div className="flex justify-between items-center mt-4">
				<CardDescription className="text-md font-medium">
					Text position
				</CardDescription>
				<div className="flex flex-row gap-3">
					<div className="flex justify-center p-[6px] cursor-pointer rounded-md shadow-sm border">
						<ArrowUpToLine size={20} className="text-gray-500" />
					</div>
					<div className="flex justify-center p-[6px] cursor-pointer rounded-md shadow-sm border">
						<ArrowDownToLine size={20} className="text-gray-500" />
					</div>
					<div className="flex justify-center p-[6px] cursor-pointer rounded-md shadow-sm border">
						<ArrowLeftToLine size={20} className="text-gray-500" />
					</div>
					<div className="flex justify-center p-[6px] cursor-pointer rounded-md shadow-sm border">
						<ArrowRightToLine size={20} className="text-gray-500" />
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center my-4">
				<CardDescription className="text-md font-medium">
					Add icon or logo
				</CardDescription>
				<Button className="w-10 h-10 bg-blue-500 text-lg rounded-lg hover:bg-blue-400">
					+
				</Button>
			</div>
			<div className="flex flex-col gap-3">
				<CardDescription className="text-md font-medium">Text</CardDescription>
				<Textarea placeholder="Type your text here." />
			</div>
			<div className="flex justify-between items-center my-6">
				<CardDescription className="text-md font-medium">
					Text Color
				</CardDescription>
				<div className="picker">
					<div
						className="w-[35px] h-[35px] swatch"
						style={{ backgroundColor: color }}
						onClick={() => toggle(true)}
					/>

					{isOpen && (
						<div className="popover_text" ref={popover}>
							<HexColorPicker
								className="z-40"
								color={color}
								onChange={setColor}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="flex justify-between items-center my-4">
				<CardDescription className="text-md font-medium">
					Text Alignment
				</CardDescription>
				<Select>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Center" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="text">Left</SelectItem>
						<SelectItem value="logo">Center</SelectItem>
						<SelectItem value="none">Right</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex justify-between items-center my-6">
				<CardDescription className="text-md font-medium">Text Size</CardDescription>
				<Slider className="w-[200px]" defaultValue={[50]} max={100} step={1} />
			</div>

			<div className="flex justify-between items-center my-6">
				<CardDescription className="text-md font-medium">
					Text width
				</CardDescription>
				<Slider className="w-[200px]" defaultValue={[90]} max={100} step={1} />
			</div>
			<div className="flex justify-center place-items-center my-10">
				<Button className="bg-red-400 flex gap-2 items-center w-[350px] h-12 hover:bg-red-500">
					<Trash2 size={18} />
					<span className="text-md font-semibold">Delete</span>
				</Button>
			</div>
		</div>
	);
};
