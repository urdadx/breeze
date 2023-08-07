import {
	ArrowRightToLine,
	ArrowDownToLine,
	ArrowUpToLine,
	ArrowLeftToLine,
	Trash2,
} from "lucide-react";
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

	const textPositions = [
		{
			name: "Up",
			code: <ArrowDownToLine size={20} className="text-gray-500" />

		},
		{
			name: "Down",
			code: <ArrowUpToLine size={20} className="text-gray-500" />

		},
		{
			name: "Left",
			code: <ArrowLeftToLine size={20} className="text-gray-500" />

		},
		{
			name: "Right",
			code: <ArrowRightToLine size={20} className="text-gray-500" />

		},
	]

	const textAlignments = ["Left", "Center", "Right"]

	const [textPos, setTextPos] = useState();
	const [textAlignment, setTextAlignment] = useState(textAlignments[1])

	const handleTextPos = (value) => {
		setTextPos(value.name);
	}

	const handleTextAlignment = (value) => {
		setTextAlignment(value);
	}

	const popover = useRef();
	const [isOpen, toggle] = useState(false);
	const [color, setColor] = useState("#000000");

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	return (
		<div className="p-4 overflow-y-auto max-h-full min-h-[500px] overscroll-none">
			<h3 className="mb-1 text-xl font-semibold">Text</h3>
			<div className="flex justify-between items-center mt-4">
				<span className="text-md font-medium text-muted-foreground">
					Text position
				</span>
				<div className="flex flex-row gap-3">
						{textPositions?.map(({ name, code }) => {
							return (
								<div key={name} className="flex justify-center p-[6px] cursor-pointer rounded-md shadow-sm border hover:shadow-md">
									{code}
								</div>
							)
						})}
				</div>
			</div>
			<div className="flex justify-between items-center my-4">
				<span className="text-md font-medium text-muted-foreground">
					Add icon or logo
				</span>
				<Button className="w-10 h-10 bg-blue-500 text-lg rounded-lg hover:bg-blue-400">
					+
				</Button>
			</div>
			<div className="flex flex-col gap-3">
				<span className="text-md font-medium text-muted-foreground">Text</span>
				<Textarea placeholder="Type your text here." />
			</div>
			<div className="flex justify-between items-center my-6">
				<span className="text-md font-medium text-muted-foreground">
					Text Color
				</span>
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
				<span className="text-md font-medium text-muted-foreground">
					Text Alignment
				</span>
				<Select onValueChange={handleTextAlignment} defaultValue={textAlignment}>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder={textAlignment} />
					</SelectTrigger>
					<SelectContent>
						{textAlignments?.map((opt, i) => {
							return (
								<SelectItem key={i} value={opt}>{opt}</SelectItem>
							)
						})}
					</SelectContent>
				</Select>
			</div>
			<div className="flex justify-between items-center my-6">
				<span className="text-md font-medium text-muted-foreground">Text Size</span>
				<Slider className="w-[200px] cursor-pointer" defaultValue={[50]} max={100} step={1} />
			</div>

			<div className="flex justify-between items-center my-6">
				<span className="text-md font-medium text-muted-foreground">
					Text width
				</span>
				<Slider className="w-[200px] cursor-pointer" defaultValue={[90]} max={100} step={1} />
			</div>
			<div className="flex justify-start place-items-center mt-6 mb-16">
				<Button className="flex bg-red-400 gap-2 items-center w-[370px] h-12 hover:bg-red-500">
					<Trash2 size={18} />
					<span className="text-md font-semibold">Delete</span>
				</Button>
			</div>
		</div>
	);
};
