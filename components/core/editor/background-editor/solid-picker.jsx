import { Card, CardDescription } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Watermark } from "../watermark";
import { solidColors } from "./bg-utils";
import { HexColorPicker } from "react-colorful";
import { useState, useRef, useCallback } from "react";
import useClickOutside from "@/hooks/use-click-outside";

export const SolidPicker = () => {
	const popover = useRef();
	const [isOpen, toggle] = useState(false);
	const [color, setColor] = useState("#82f5ff");

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	return (
		<>
			<TabsContent value="solid">
				<Card className="p-3 my-6">
					<CardDescription className="my-1">
						Select a solid color
					</CardDescription>
					<div className="space-y-4">
						<div className="grid gap-2 w-full items-center grid-cols-7 my-2">
							{solidColors?.map((color) => {
								return (
									<div
										style={{
											background: `${color}`,
										}}
										key={color}
										className="w-10 h-10 rounded-full border-zinc-300"
									/>
								);
							})}
						</div>
						<div className="">
							<CardDescription className="mt-6 mb-4">
								Custom Solid Color
							</CardDescription>
							<div className="flex justify-start w-full place-items-start z-0 mb-6">
								<div className="picker">
									<div
										className="swatch"
										style={{ backgroundColor: color }}
										onClick={() => toggle(true)}
									/>

									{isOpen && (
										<div className="popover" ref={popover}>
											<HexColorPicker
												className="z-40"
												color={color}
												onChange={setColor}
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<Watermark />
				</Card>
			</TabsContent>
		</>
	);
};
